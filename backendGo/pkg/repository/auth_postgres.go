package repository

import (
	"fmt"

	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/jmoiron/sqlx"
)

type AuthPostgres struct {
	db *sqlx.DB
}

func NewAuthPostgres(db *sqlx.DB) *AuthPostgres {
	return &AuthPostgres{db: db}
}

func (r *AuthPostgres) CreateUser(user todo.User) (int, error) {
	var id int
	query := fmt.Sprintf("INSERT INTO %s (email, password_hash) values ($1, $2) RETURNING id", usersTable)
	row := r.db.QueryRow(query, user.Email, user.Password)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}
	return id, nil
}

func (r *AuthPostgres) UserIsBlocked(userId int) (bool, error) {
	var is_blocked bool
	UserIsNotBlockedQuery := fmt.Sprintf("SELECT is_blocked FROM %s WHERE id = $1", usersTable)
	err := r.db.Get(&is_blocked, UserIsNotBlockedQuery, userId)
	return is_blocked, err
}

func (r *AuthPostgres) UserCanMakeCheck(userId int) (bool, error) {
	tx, err := r.db.Begin()
	if err != nil {
		return false, err
	}

	var is_blocked bool
	var checks_available int
	UserCanMakeCheckQuery := fmt.Sprintf("SELECT is_blocked, checks_available FROM %s WHERE id = $1", usersTable)
	row := r.db.QueryRow(UserCanMakeCheckQuery, userId)
	if err := row.Scan(&is_blocked, &checks_available); err != nil {
		tx.Rollback()
		return false, err
	}

	return (!is_blocked && checks_available > 0), err
}

func (r *AuthPostgres) GetUser(email, password string) (todo.User, error) {
	var user todo.User
	query := fmt.Sprintf("SELECT id FROM %s WHERE email=$1 AND password_hash=$2", usersTable)
	err := r.db.Get(&user, query, email, password)
	return user, err
}

func (r *AuthPostgres) DeleteUser(email, password string) error {
	query := fmt.Sprintf("DELETE FROM %s WHERE email=$1 AND password_hash=$2", usersTable)
	_, err := r.db.Exec(query, email, password)
	return err
}

package repository

import (
	"fmt"

	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/jmoiron/sqlx"
)

type AdminsPostgres struct {
	db *sqlx.DB
}

func NewAdminsPostgres(db *sqlx.DB) *AdminsPostgres {
	return &AdminsPostgres{db: db}
}

func (r *AdminsPostgres) GetAdmin(email, password string) (todo.Admin, error) {
	var admin todo.Admin
	query := fmt.Sprintf("SELECT id FROM %s WHERE email_admins=$1 AND password_hash_admins=$2", adminsTable)
	err := r.db.Get(&admin, query, email, password)

	return admin, err
}

func (r *AdminsPostgres) GetAllUsers() ([]todo.UsersListForAdmin, error) {
	var list []todo.UsersListForAdmin

	query := fmt.Sprintf("SELECT id, email, checks_available, created_at, last_login, is_blocked FROM %s", usersTable)

	err := r.db.Select(&list, query)

	return list, err
}

func (r *AdminsPostgres) CreateAdmin(admin todo.Admin) (todo.NewCreatedAdmin, error) {
	var response todo.NewCreatedAdmin
	query := fmt.Sprintf("INSERT INTO %s (email_admin, password_hash_admin, is_blocked) values ($1, $2, TRUE) RETURNING id, is_blocked", adminsTable)
	row := r.db.QueryRow(query, admin.Email, admin.Password)
	fmt.Print(row)
	if err := row.Scan(&response.Id, &response.Is_blocked); err != nil {
		return response, err
	}
	return response, nil
}

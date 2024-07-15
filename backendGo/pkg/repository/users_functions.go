package repository

import (
	"fmt"

	"github.com/jmoiron/sqlx"
)

type UsersFuncPostgres struct {
	db *sqlx.DB
}

func NewUsersFuncPostgres(db *sqlx.DB) *UsersFuncPostgres {
	return &UsersFuncPostgres{db: db}
}

func (r *UsersFuncPostgres) RefillChecks(userId string, number int) error {
	query := fmt.Sprintf("UPDATE %s SET checks_available = checks_available + $1 WHERE id = $2;", usersTable)
	res, err := r.db.Exec(query, userId, number)
	fmt.Println(res)
	fmt.Println(err)
	return err
}

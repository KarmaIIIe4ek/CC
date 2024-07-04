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

package repository

import (
	"fmt"

	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/jmoiron/sqlx"
)

type CheckedAddressListPostgres struct {
	db *sqlx.DB
}

func NewCheckedAddressListPostgres(db *sqlx.DB) *CheckedAddressListPostgres {
	return &CheckedAddressListPostgres{db: db}
}

func (r *CheckedAddressListPostgres) Create(userId int, list todo.CheckedAddressList) (int, error) {
	tx, err := r.db.Begin()
	if err != nil {
		return 0, err
	}

	var id int
	createListQuery := fmt.Sprintf("INSERT INTO %s (address, title, description, risk_score) VALUES ($1, $2, $3, $4) RETURNING id", checkedAddressTable)
	row := tx.QueryRow(createListQuery, list.Address, list.Title, list.Description, list.RiskScore)
	if err := row.Scan(&id); err != nil {
		tx.Rollback()
		return 0, err
	}

	createUsersListQuery := fmt.Sprintf("INSERT INTO %s (user_id, list_id) VALUES ($1, $2)", usersListsTable)
	_, err = tx.Exec(createUsersListQuery, userId, id)
	if err != nil {
		tx.Rollback()
		return 0, err
	}

	return id, tx.Commit()
}

func (r *CheckedAddressListPostgres) GetAll(userId int) ([]todo.CheckedAddressList, error) {
	var lists []todo.CheckedAddressList
	query := fmt.Sprintf("SELECT cha.id, cha.address, cha.title, cha.description, cha.risk_score FROM %s cha INNER JOIN %s ul on cha.id = ul.list_id WHERE ul.user_id = $1", checkedAddressTable, usersListsTable)

	err := r.db.Select(&lists, query, userId)

	return lists, err
}

func (r *CheckedAddressListPostgres) GetById(userId, listId int) (todo.CheckedAddressList, error) {
	var list todo.CheckedAddressList

	query := fmt.Sprintf(`SELECT cha.id, cha.address, cha.title, cha.description, cha.risk_score FROM %s cha
	 INNER JOIN %s ul on cha.id = ul.list_id WHERE ul.user_id = $1 AND ul.list_id = $2`, checkedAddressTable, usersListsTable)

	err := r.db.Get(&list, query, userId, listId)

	return list, err
}

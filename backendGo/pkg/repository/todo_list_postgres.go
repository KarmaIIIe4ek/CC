package repository

import (
	"fmt"
	"strings"

	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/jmoiron/sqlx"
	"github.com/sirupsen/logrus"
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

func (r *CheckedAddressListPostgres) Delete(userId int, listId int) error {
	query := fmt.Sprintf("DELETE FROM %s tl USING %s ul WHERE tl.id = ul.list_id AND ul.user_id=$1 AND ul.list_id=$2", checkedAddressTable, usersListsTable)
	_, err := r.db.Exec(query, userId, listId)
	return err
}

func (r *CheckedAddressListPostgres) Update(userId, listId int, input todo.UpdateListInput) error {
	setValues := make([]string, 0)
	args := make([]interface{}, 0)
	argId := 1

	if input.Title != nil {
		setValues = append(setValues, fmt.Sprintf("title=$%d", argId))
		args = append(args, *input.Title)
		argId++
	}

	if input.Description != nil {
		setValues = append(setValues, fmt.Sprintf("description=$%d", argId))
		args = append(args, *input.Description)
		argId++
	}

	setQuery := strings.Join(setValues, ", ")

	query := fmt.Sprintf("UPDATE %s cha SET %s FROM %s ul WHERE cha.id = ul.list_id AND ul.list_id=$%d AND ul.user_id=$%d", checkedAddressTable, setQuery, usersListsTable, argId, argId+1)

	args = append(args, listId, userId)

	logrus.Debugf("updateQuery: %s", query)
	logrus.Debugf("args: %s", args)

	_, err := r.db.Exec(query, args...)
	return err
}

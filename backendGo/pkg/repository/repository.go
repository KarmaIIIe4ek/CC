package repository

import (
	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/jmoiron/sqlx"
)

type Autorization interface {
	CreateUser(user todo.User) (int, error)
	GetUser(email, password string) (todo.User, error)
	DeleteUser(email, password string) error
}

type CheckedAddressList interface {
	Create(userId int, list todo.CheckedAddressList) (int, error)
	GetAll(userId int) ([]todo.CheckedAddressList, error)
	GetById(userId, id int) (todo.CheckedAddressList, error)
	Update(userId, listId int, input todo.UpdateListInput) error
}

type Admins interface {
	GetAdmin(email, password string) (todo.Admin, error)
}

type Repository struct {
	Autorization
	CheckedAddressList
	Admins
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Autorization:       NewAuthPostgres(db),
		CheckedAddressList: NewCheckedAddressListPostgres(db),
		Admins:             NewAdminsPostgres(db),
	}
}

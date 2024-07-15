package repository

import (
	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/jmoiron/sqlx"
)

type Autorization interface {
	CreateUser(user todo.User) (int, error)
	GetUser(email, password string) (todo.User, error)
	DeleteUser(email, password string) error
	UserIsBlocked(userId int) (bool, error)
	UserCanMakeCheck(userId int) (bool, error)
}

type UsersFunc interface {
	RefillChecks(userId string, number int) error
}

type CheckedAddressList interface {
	Create(userId int, list todo.CheckedAddressList) (int, error)
	GetAll(userId int) ([]todo.CheckedAddressListForResponse, error)
	GetById(userId, id int) (todo.CheckedAddressListForResponse, error)
}

type Admins interface {
	GetAdmin(email, password string) (todo.Admin, error)
	GetAllUsers() ([]todo.UsersListForAdmin, error)
	CreateAdmin(admin todo.Admin) (todo.NewCreatedAdmin, error)
}

type Repository struct {
	Autorization
	CheckedAddressList
	Admins
	UsersFunc
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Autorization:       NewAuthPostgres(db),
		CheckedAddressList: NewCheckedAddressListPostgres(db),
		Admins:             NewAdminsPostgres(db),
		UsersFunc:          NewUsersFuncPostgres(db),
	}
}

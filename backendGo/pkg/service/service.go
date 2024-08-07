package service

import (
	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/KarmaIIIe4ek/backendGo/pkg/repository"
)

type Autorization interface {
	CreateUser(user todo.User) (int, error)
	GenerateToken(email, password string) (string, error)
	ParseToken(token string) (int, error)
	DeleteUser(email, hashPassword string) error
	UserIsBlocked(userId int) (bool, error)
	UserCanMakeCheck(userId int) (bool, error)
}

type CheckedAddressList interface {
	Create(userId int, list todo.CheckedAddressList) (int, error)
	GetAll(userId int) ([]todo.CheckedAddressListForResponse, error)
	GetById(userId, listId int) (todo.CheckedAddressListForResponse, error)
}

type Admins interface {
	CreateAdmin(admin todo.Admin) (todo.NewCreatedAdmin, error)
	GenerateTokenAdmins(email, password string) (string, error)
	ParseTokenAdmins(token string) (int, error)
	GetAllUsers() ([]todo.UsersListForAdmin, error)
}

type Service struct {
	Autorization
	CheckedAddressList
	Admins
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		Autorization:       NewAuthService(repos.Autorization),
		CheckedAddressList: NewCheckedAddressListService(repos.CheckedAddressList),
		Admins:             NewAuthAdminsService(repos.Admins),
	}
}

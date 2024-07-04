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
}

type CheckedAddressList interface {
	Create(userId int, list todo.CheckedAddressList) (int, error)
	GetAll(userId int) ([]todo.CheckedAddressList, error)
	GetById(userId, listId int) (todo.CheckedAddressList, error)
	Update(userId, listId int, input todo.UpdateListInput) error
}

type Admins interface {
	GenerateTokenAdmins(email, password string) (string, error)
	ParseTokenAdmins(token string) (int, error)
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

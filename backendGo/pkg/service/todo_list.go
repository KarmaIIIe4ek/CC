package service

import (
	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/KarmaIIIe4ek/backendGo/pkg/repository"
)

type CheckedAddressListService struct {
	repo repository.CheckedAddressList
}

func NewCheckedAddressListService(repo repository.CheckedAddressList) *CheckedAddressListService {
	return &CheckedAddressListService{repo: repo}
}

func (s *CheckedAddressListService) Create(userId int, list todo.CheckedAddressList) (int, error) {
	return s.repo.Create(userId, list)
}

func (s *CheckedAddressListService) GetAll(userId int) ([]todo.CheckedAddressList, error) {
	return s.repo.GetAll(userId)
}

func (s *CheckedAddressListService) GetById(userId, listId int) (todo.CheckedAddressList, error) {
	return s.repo.GetById(userId, listId)
}

func (s *CheckedAddressListService) Delete(userId, listId int) error {
	return s.repo.Delete(userId, listId)
}

func (s *CheckedAddressListService) Update(userId, listId int, input todo.UpdateListInput) error {
	if err := input.Validate(); err != nil {
		return err
	}
	return s.repo.Update(userId, listId, input)
}

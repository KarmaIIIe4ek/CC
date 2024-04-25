package todo

import "errors"

type UsersList struct {
	Id     int
	UserId int
	ListId int
}

type CheckedAddressList struct {
	Id          int    `json:"id"`
	Address     string `json:"address"`
	Title       string `json:"title"`
	Description string `json:"description"`
	RiskScore   string `json:"risk_score" db:"risk_score"`
}

type UpdateListInput struct {
	Title       *string `json:"title"`
	Description *string `json:"description"`
}

func (i UpdateListInput) Validate() error {
	if i.Title == nil && i.Description == nil {
		return errors.New("update structure has no values")
	}

	return nil
}

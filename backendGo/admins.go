package todo

type Admin struct {
	Id       int    `json:"-" db:"id"`
	Email    string `json:"email_admin" binding:"required"`
	Password string `json:"password_admin" binding:"required"`
}

type UsersListForAdmin struct {
	Id               int    `json:"-" db:"id"`
	Email            string `json:"email" binding:"required"`
	Checks_available int    `json:"checks_available" binding:"required"`
	Created_at       string `json:"created_at" binding:"required"`
	Last_login       string `json:"last_login" binding:"required"`
	Is_blocked       bool   `json:"is_blocked" binding:"required"`
}

type NewCreatedAdmin struct {
	Id         int  `json:"-" db:"id"`
	Is_blocked bool `json:"is_blocked" db:"is_blocked"`
}

package todo

type Admin struct {
	Id       int    `json:"-" db:"id"`
	Email    string `json:"email_admins" binding:"required"`
	Password string `json:"password_admins" binding:"required"`
}

type UsersList struct {
	Id       			int    `json:"-" db:"id"`
	Email    			string `json:"email_admins" binding:"required"`
	NumberChecks 		int    `json:"numbers_checks" db:"
}

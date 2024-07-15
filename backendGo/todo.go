package todo

type UsersList struct {
	Id     int
	UserId int
	ListId int
}

type CheckedAddressList struct {
	Address     string `json:"address"`
	Title       string `json:"title"`
	Description string `json:"description"`
	RiskScore   int    `json:"risk_score"`
}

type CheckedAddressListForResponse struct {
	Id          int    `json:"id"`
	Address     string `json:"address"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Risk_score  int    `json:"risk_score"`
	Created_at  string `json:"created_at"`
}

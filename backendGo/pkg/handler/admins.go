package handler

import (
	"net/http"

	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/gin-gonic/gin"
)

type AdminStructNoId struct {
	Email    string `json:"email_admin" binding:"required"`
	Password string `json:"password_admin" binding:"required"`
}

type UsersAllListResponse struct {
	Data []todo.UsersListForAdmin `json:"data"`
}

func (h *Handler) signUpAdmin(c *gin.Context) {
	var input todo.Admin

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	admin, err := h.services.Admins.CreateAdmin(input)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id":         admin.Id,
		"email":      input.Email,
		"password":   input.Password,
		"is_blocked": admin.Is_blocked,
	})
}

func (h *Handler) signInAdmin(c *gin.Context) {
	var input AdminStructNoId

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	token, err := h.services.Admins.GenerateTokenAdmins(input.Email, input.Password)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"email":    input.Email,
		"password": input.Password,
		"token":    token,
	})
}

func (h *Handler) getAllUsers(c *gin.Context) {

	list, err := h.services.Admins.GetAllUsers()
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, UsersAllListResponse{
		Data: list,
	})

}

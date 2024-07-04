package handler

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type AdminStructNoId struct {
	Email    string `json:"email_admin" binding:"required"`
	Password string `json:"password_admin" binding:"required"`
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
	AdminId, err := getAdminId(c)
	fmt.Print(AdminId)
	if err != nil {
		return
	}

	lists, err := h.services.Admins.getAllUsers(AdminId)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, getAllListResponse{
		Data: lists,
	})

}

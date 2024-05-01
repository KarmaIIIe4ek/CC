package handler

import (
	"net/http"

	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/gin-gonic/gin"
)

// @Summary SignUp
// @Tags auth
// @Description create account
// @ID create-account
// @Accept json
// @Produce json
// @Param input body todo.User true "account info"
// @Success 200 {integer} integer 1
// @Failure 400 {object} handler.errorResponse
// @Failure 404 {object} handler.errorResponse
// @Failure 500 {object} handler.errorResponse
// @Failure default {object} handler.errorResponse
// @Router /auth/sign-up [post]
func (h *Handler) signUp(c *gin.Context) {
	var input todo.User

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	id, err := h.services.Autorization.CreateUser(input)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

type UserStructNoId struct {
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

// @Summary SignIn
// @Tags auth
// @Description login
// @ID login-account,
// @Accept json
// @Produce json
// @Param input body UserStructNoId true "credentials"
// @Success 200 {string} string "token"
// @Failure 400 {object} handler.errorResponse
// @Failure 404 {object} handler.errorResponse
// @Failure 500 {object} handler.errorResponse
// @Failure default {object} handler.errorResponse
// @Router /auth/sign-in [post]
func (h *Handler) signIn(c *gin.Context) {
	var input UserStructNoId

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	token, err := h.services.Autorization.GenerateToken(input.Email, input.Password)
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

// @Summary SignDelete
// @Tags auth
// @Description delete account
// @ID delete-account,
// @Accept json
// @Produce json
// @Param input body UserStructNoId true "credentials"
// @Success 200 {string} string "token"
// @Failure 400 {object} handler.errorResponse
// @Failure 404 {object} handler.errorResponse
// @Failure 500 {object} handler.errorResponse
// @Failure default {object} handler.errorResponse
// @Router /auth/sign-in [delete]
func (h *Handler) signDelete(c *gin.Context) {
	var input UserStructNoId

	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	err := h.services.Autorization.DeleteUser(input.Email, input.Password)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, statusResponse{
		Status: "ok",
	})

}

package handler

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

const (
	authorizationHeaderAdmin = "Authorization"
	AdminCtx                 = "AdminId"
)

func (h *Handler) AdminIdentity(c *gin.Context) {
	// header := c.GetHeader(authorizationHeader)
	// if header == "" {
	// 	newErrorResponse(c, http.StatusUnauthorized, "empty authorization header")
	// }

	// headerParts := strings.Split(header, " ")
	// if len(headerParts) != 2 {
	// 	newErrorResponse(c, http.StatusUnauthorized, "invalid authorization header")
	// 	return
	// }

	// userId, err := h.services.Autorization.ParseToken(headerParts[1])
	// if err != nil {
	// 	newErrorResponse(c, http.StatusUnauthorized, err.Error())
	// }

	// fmt.Println(userId)
	c.Set(AdminCtx, 4)
}

func getAdminId(c *gin.Context) (int, error) {
	id, ok := c.Get(AdminCtx)
	if !ok {
		newErrorResponse(c, http.StatusInternalServerError, "admin id not found")
		return 0, errors.New("admin id not found")
	}

	idInt, ok := id.(int)
	if !ok {
		newErrorResponse(c, http.StatusInternalServerError, "admin id is of invalid type")
		return 0, errors.New("admin id is of invalid type")
	}
	return idInt, nil
}

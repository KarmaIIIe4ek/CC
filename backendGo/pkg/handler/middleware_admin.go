package handler

import (
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

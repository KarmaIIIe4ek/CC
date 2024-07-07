package handler

import (
	"fmt"
	"net/http"
	"strconv"

	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/gin-gonic/gin"
)

// @Summary Create list
// @Security ApiKeyAuth
// @Tags lists
// @Description create list
// @ID create-list,
// @Accept json
// @Produce json
// @Param input body todo.CheckedAddressList true "list info"
// @Success 200 {integer} integer 1
// @Failure 400 {object} handler.errorResponse
// @Failure 500 {object} handler.errorResponse
// @Failure default {object} handler.errorResponse
// @Router /api/lists [post]
func (h *Handler) createList(c *gin.Context) {
	userId, err := getUserId(c)
	if err != nil {
		return
	}

	var input todo.CheckedAddressList
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	id, err := h.services.CheckedAddressList.Create(userId, input)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

type getAllListResponse struct {
	Data []todo.CheckedAddressList `json:"data"`
}

func (h *Handler) getAllList(c *gin.Context) {
	userId, err := getUserId(c)
	fmt.Print(userId)
	if err != nil {
		return
	}

	lists, err := h.services.CheckedAddressList.GetAll(userId)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, getAllListResponse{
		Data: lists,
	})

}

func (h *Handler) getListById(c *gin.Context) {
	userId, err := getUserId(c)
	if err != nil {
		return
	}

	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, "invalid id param")
		return
	}

	list, err := h.services.CheckedAddressList.GetById(userId, id)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, list)
}

package service

import (
	"crypto/sha1"
	"errors"
	"fmt"
	"os"
	"time"

	todo "github.com/KarmaIIIe4ek/backendGo"
	"github.com/KarmaIIIe4ek/backendGo/pkg/repository"
	"github.com/dgrijalva/jwt-go"
)

var saltAdmin string = os.Getenv("salt_admin")
var signingKeyAdmin string = os.Getenv("signingKey")

const tokenTTLAdmin = 12 * time.Hour

type TokenClaimsAdmins struct {
	jwt.StandardClaims
	AdminId int `json:"admin_id"`
}

type AuthAdminsService struct {
	repo repository.Admins
}

func NewAuthAdminsService(repo repository.Admins) *AuthAdminsService {
	return &AuthAdminsService{repo: repo}
}

func (s *AuthAdminsService) CreateAdmin(admin todo.Admin) (todo.NewCreatedAdmin, error) {
	admin.Password = generatePasswordHashAdmin(admin.Password)
	return s.repo.CreateAdmin(admin)
}

func (s *AuthAdminsService) GenerateTokenAdmins(email, password string) (string, error) {
	admin, err := s.repo.GetAdmin(email, generatePasswordHashAdmin(password))
	if err != nil {
		return "", err
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &TokenClaimsAdmins{
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(tokenTTLAdmin).Unix(),
			IssuedAt:  time.Now().Unix(),
		},
		admin.Id,
	})

	return token.SignedString([]byte(signingKeyAdmin))
}

func (s *AuthAdminsService) ParseTokenAdmins(accessToken string) (int, error) {
	token, err := jwt.ParseWithClaims(accessToken, &TokenClaimsAdmins{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("invalid signing method")
		}

		return []byte(signingKeyAdmin), nil
	})
	if err != nil {
		return 0, err
	}

	claims, ok := token.Claims.(*TokenClaimsAdmins)
	if !ok {
		return 0, errors.New("token claims are not of type *TokenClaimsAdmin")
	}

	return claims.AdminId, nil

}

func generatePasswordHashAdmin(password string) string {
	hash := sha1.New()
	hash.Write([]byte(password))
	return fmt.Sprintf("%x", hash.Sum([]byte(saltAdmin)))
}

func (s *AuthAdminsService) GetAllUsers() ([]todo.UsersListForAdmin, error) {
	return s.repo.GetAllUsers()
}

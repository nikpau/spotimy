package user

import (
	"context"

	"github.com/bufbuild/connect-go"
	usersv1 "github.com/nikpau/spotimy/apps/gateway/def/user/v1"
)

type UserServiceMock struct{}

func (s *UserServiceMock) GetUser(context.Context, *connect.Request[usersv1.GetUserRequest]) (*connect.Response[usersv1.User], error) {
	return connect.NewResponse(&usersv1.User{
		Id:    1,
		Name:  "Nick Lehmann",
		Email: "nick@lehmann.sh",
	}), nil
}

func (s *UserServiceMock) ListUsers(context.Context, *connect.Request[usersv1.ListUsersRequest]) (*connect.Response[usersv1.ListUsersResponse], error) {
	return nil, nil
}

func (s *UserServiceMock) CreateUser(context.Context, *connect.Request[usersv1.CreateUserRequest]) (*connect.Response[usersv1.User], error) {
	return nil, nil
}

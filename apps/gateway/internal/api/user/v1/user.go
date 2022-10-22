package user

import (
	"context"
	"fmt"
	"net/http"

	"github.com/bufbuild/connect-go"
	usersv1 "github.com/nikpau/spotimy/apps/gateway/def/user/v1"
	"github.com/nikpau/spotimy/apps/gateway/def/user/v1/userconnect"
	"github.com/nikpau/spotimy/apps/gateway/internal/api"
)

func RegisterUserComponent(url string, httpClient http.Client) api.Component {
	usersClient := userconnect.NewUserServiceClient(
		&httpClient,
		url,
		connect.WithGRPC(),
	)

	server := UsersServer{
		Client: usersClient,
	}

	path, handler := userconnect.NewUserServiceHandler(&server)

	return api.Component{
		Path:        path,
		Handler:     handler,
		ServiceName: userconnect.UserServiceName,
	}
}

type UsersServer struct {
	Client userconnect.UserServiceClient
}

func (s *UsersServer) GetUser(ctx context.Context, req *connect.Request[usersv1.GetUserRequest]) (*connect.Response[usersv1.User], error) {
	fmt.Println("GetUser")
	res, err := s.Client.GetUser(ctx, req)
	if err != nil {
		fmt.Printf("Error in GetUser: %v\n", err)
		return nil, err
	}
	return connect.NewResponse(res.Msg), nil
}

func (s *UsersServer) ListUsers(
	ctx context.Context,
	req *connect.Request[usersv1.ListUsersRequest],
) (*connect.Response[usersv1.ListUsersResponse], error) {
	return s.Client.ListUsers(ctx, req)
}

func (s *UsersServer) CreateUser(ctx context.Context, req *connect.Request[usersv1.CreateUserRequest]) (*connect.Response[usersv1.User], error) {
	return s.Client.CreateUser(ctx, req)
}

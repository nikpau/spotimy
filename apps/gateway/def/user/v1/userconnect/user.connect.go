// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: user/v1/user.proto

package userconnect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/nikpau/spotimy/apps/gateway/def/user/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_1_0

const (
	// UserServiceName is the fully-qualified name of the UserService service.
	UserServiceName = "user.v1.UserService"
)

// UserServiceClient is a client for the user.v1.UserService service.
type UserServiceClient interface {
	GetUser(context.Context, *connect_go.Request[v1.GetUserRequest]) (*connect_go.Response[v1.GetUserResponse], error)
	ListUsers(context.Context, *connect_go.Request[v1.ListUsersRequest]) (*connect_go.Response[v1.ListUsersResponse], error)
	CreateUser(context.Context, *connect_go.Request[v1.CreateUserRequest]) (*connect_go.Response[v1.User], error)
}

// NewUserServiceClient constructs a client for the user.v1.UserService service. By default, it uses
// the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewUserServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) UserServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &userServiceClient{
		getUser: connect_go.NewClient[v1.GetUserRequest, v1.GetUserResponse](
			httpClient,
			baseURL+"/user.v1.UserService/GetUser",
			opts...,
		),
		listUsers: connect_go.NewClient[v1.ListUsersRequest, v1.ListUsersResponse](
			httpClient,
			baseURL+"/user.v1.UserService/ListUsers",
			opts...,
		),
		createUser: connect_go.NewClient[v1.CreateUserRequest, v1.User](
			httpClient,
			baseURL+"/user.v1.UserService/CreateUser",
			opts...,
		),
	}
}

// userServiceClient implements UserServiceClient.
type userServiceClient struct {
	getUser    *connect_go.Client[v1.GetUserRequest, v1.GetUserResponse]
	listUsers  *connect_go.Client[v1.ListUsersRequest, v1.ListUsersResponse]
	createUser *connect_go.Client[v1.CreateUserRequest, v1.User]
}

// GetUser calls user.v1.UserService.GetUser.
func (c *userServiceClient) GetUser(ctx context.Context, req *connect_go.Request[v1.GetUserRequest]) (*connect_go.Response[v1.GetUserResponse], error) {
	return c.getUser.CallUnary(ctx, req)
}

// ListUsers calls user.v1.UserService.ListUsers.
func (c *userServiceClient) ListUsers(ctx context.Context, req *connect_go.Request[v1.ListUsersRequest]) (*connect_go.Response[v1.ListUsersResponse], error) {
	return c.listUsers.CallUnary(ctx, req)
}

// CreateUser calls user.v1.UserService.CreateUser.
func (c *userServiceClient) CreateUser(ctx context.Context, req *connect_go.Request[v1.CreateUserRequest]) (*connect_go.Response[v1.User], error) {
	return c.createUser.CallUnary(ctx, req)
}

// UserServiceHandler is an implementation of the user.v1.UserService service.
type UserServiceHandler interface {
	GetUser(context.Context, *connect_go.Request[v1.GetUserRequest]) (*connect_go.Response[v1.GetUserResponse], error)
	ListUsers(context.Context, *connect_go.Request[v1.ListUsersRequest]) (*connect_go.Response[v1.ListUsersResponse], error)
	CreateUser(context.Context, *connect_go.Request[v1.CreateUserRequest]) (*connect_go.Response[v1.User], error)
}

// NewUserServiceHandler builds an HTTP handler from the service implementation. It returns the path
// on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewUserServiceHandler(svc UserServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle("/user.v1.UserService/GetUser", connect_go.NewUnaryHandler(
		"/user.v1.UserService/GetUser",
		svc.GetUser,
		opts...,
	))
	mux.Handle("/user.v1.UserService/ListUsers", connect_go.NewUnaryHandler(
		"/user.v1.UserService/ListUsers",
		svc.ListUsers,
		opts...,
	))
	mux.Handle("/user.v1.UserService/CreateUser", connect_go.NewUnaryHandler(
		"/user.v1.UserService/CreateUser",
		svc.CreateUser,
		opts...,
	))
	return "/user.v1.UserService/", mux
}

// UnimplementedUserServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedUserServiceHandler struct{}

func (UnimplementedUserServiceHandler) GetUser(context.Context, *connect_go.Request[v1.GetUserRequest]) (*connect_go.Response[v1.GetUserResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("user.v1.UserService.GetUser is not implemented"))
}

func (UnimplementedUserServiceHandler) ListUsers(context.Context, *connect_go.Request[v1.ListUsersRequest]) (*connect_go.Response[v1.ListUsersResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("user.v1.UserService.ListUsers is not implemented"))
}

func (UnimplementedUserServiceHandler) CreateUser(context.Context, *connect_go.Request[v1.CreateUserRequest]) (*connect_go.Response[v1.User], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("user.v1.UserService.CreateUser is not implemented"))
}

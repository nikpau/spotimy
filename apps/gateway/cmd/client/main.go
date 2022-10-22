package main

import (
	"context"
	"crypto/tls"
	"log"
	"net"
	"net/http"

	"github.com/bufbuild/connect-go"
	usersv1 "github.com/nikpau/spotimy/apps/gateway/def/user/v1"
	"github.com/nikpau/spotimy/apps/gateway/def/user/v1/userconnect"
	"golang.org/x/net/http2"
)

func main() {
	client := userconnect.NewUserServiceClient(&http.Client{
		Transport: &http2.Transport{
			AllowHTTP: true,
			DialTLS: func(network, addr string, _ *tls.Config) (net.Conn, error) {
				// If you're also using this client for non-h2c traffic, you may want to
				// delegate to tls.Dial if the network isn't TCP or the addr isn't in an
				// allowlist.
				return net.Dial(network, addr)
			},
		},
	}, "http://localhost:50012", connect.WithGRPC())
	req := connect.NewRequest(&usersv1.GetUserRequest{
		Email: "nick@lehmann.sh",
	})
	res, err := client.GetUser(context.Background(), req)
	if err != nil {
		panic(err)
	}
	log.Println(res.Msg)
}

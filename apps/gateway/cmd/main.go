package main

import (
	"crypto/tls"
	"fmt"
	"net"
	"net/http"

	grpcreflect "github.com/bufbuild/connect-grpcreflect-go"
	"github.com/nikpau/spotimy/apps/gateway/cmd/config"
	"github.com/nikpau/spotimy/apps/gateway/internal/api"
	"github.com/nikpau/spotimy/apps/gateway/internal/api/music/v1"
	"github.com/nikpau/spotimy/apps/gateway/internal/api/user/v1"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
)

func main() {
	config := config.Config{
		Port: 50002,
		Services: config.ServicesConfig{
			Artists: config.ServiceConnectionConfig{
				Host: "localhost",
				Port: 50010,
			},
			Genres: config.ServiceConnectionConfig{
				Host: "localhost",
				Port: 50010,
			},
			TrackHistory: config.ServiceConnectionConfig{
				Host: "localhost",
				Port: 50010,
			},
			Users: config.ServiceConnectionConfig{
				Host: "localhost",
				Port: 50012,
			},
		},
		ServerReflection: true,
	}

	multiplexer := http.NewServeMux()
	httpClient := getHTTPClient()

	components := []api.Component{
		music.RegisterArtistComponent(config.Services.Artists.URL(), httpClient),
		user.RegisterUserComponent(config.Services.Users.URL(), httpClient),
		music.RegisterGenreComponent(config.Services.Genres.URL(), httpClient),
		music.RegisterTrackHistoryComponent(config.Services.TrackHistory.URL(), httpClient),
	}

	// Register all components.
	for i, component := range components {
		fmt.Printf("Registering component %d\n", i+1)
		multiplexer.Handle(component.Path, component.Handler)
	}

	// Enable server reflection for all components if enabled.
	if config.ServerReflection {
		serviceNames := make([]string, len(components))
		fmt.Println("Register for server reflection:")
		for _, component := range components {
			serviceNames = append(serviceNames, component.ServiceName)
			fmt.Printf("- %s\n", component.ServiceName)
		}

		reflector := grpcreflect.NewStaticReflector()
		multiplexer.Handle(grpcreflect.NewHandlerV1(reflector))
		// Many tools still expect the older version of the server reflection API, so
		// most servers should mount both handlers.
		multiplexer.Handle(grpcreflect.NewHandlerV1Alpha(reflector))
	}

	fmt.Println("Starting server...")
	err := http.ListenAndServe(
		fmt.Sprintf("0.0.0.0:50002"),
		// Use h2c so we can serve HTTP/2 without TLS.
		h2c.NewHandler(multiplexer, &http2.Server{}),
	)
	if err != nil {
		fmt.Printf("Error starting server: %s", err)
	}
}

func getHTTPClient() http.Client {
	return http.Client{
		Transport: &http2.Transport{
			AllowHTTP: true,
			DialTLS: func(network, addr string, _ *tls.Config) (net.Conn, error) {
				// If you're also using this client for non-h2c traffic, you may want to
				// delegate to tls.Dial if the network isn't TCP or the addr isn't in an
				// allowlist.
				return net.Dial(network, addr)
			},
		},
	}
}

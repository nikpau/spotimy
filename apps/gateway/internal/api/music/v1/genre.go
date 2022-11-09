package music

import (
	"context"
	"net/http"

	"github.com/bufbuild/connect-go"
	genresv1 "github.com/nikpau/spotimy/apps/gateway/def/music/genres/v1"
	"github.com/nikpau/spotimy/apps/gateway/def/music/genres/v1/genresconnect"
	"github.com/nikpau/spotimy/apps/gateway/internal/api"
)

func RegisterGenreComponent(url string, httpClient http.Client) api.Component {
	genresClient := genresconnect.NewGenresServiceClient(
		&httpClient,
		url,
		connect.WithGRPC(),
	)

	server := GenreServer{
		Client: genresClient,
	}

	path, handler := genresconnect.NewGenresServiceHandler(&server)

	return api.Component{
		Path:        path,
		Handler:     handler,
		ServiceName: genresconnect.GenresServiceName,
	}
}

type GenreServer struct {
	Client genresconnect.GenresServiceClient
}

func (s *GenreServer) ListGenres(ctx context.Context, req *connect.Request[genresv1.ListGenresRequest]) (*connect.Response[genresv1.ListGenresResponse], error) {
	res, err := s.Client.ListGenres(ctx, req)
	if err != nil {
		return nil, err
	}
	return connect.NewResponse(res.Msg), nil
}

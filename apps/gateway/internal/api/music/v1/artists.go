package music

import (
	"context"
	"net/http"

	"github.com/bufbuild/connect-go"
	artistsv1 "github.com/nikpau/spotimy/apps/gateway/def/music/artists/v1"
	"github.com/nikpau/spotimy/apps/gateway/def/music/artists/v1/artistsconnect"
	"github.com/nikpau/spotimy/apps/gateway/internal/api"
)

func RegisterArtistComponent(url string, httpClient http.Client) api.Component {
	artistsClient := artistsconnect.NewArtistServiceClient(
		&httpClient,
		url,
		connect.WithGRPC(),
	)

	server := ArtistsServer{
		Client: artistsClient,
	}

	path, handler := artistsconnect.NewArtistServiceHandler(&server)

	return api.Component{
		Path:        path,
		Handler:     handler,
		ServiceName: artistsconnect.ArtistServiceName,
	}
}

type ArtistsServer struct {
	Client artistsconnect.ArtistServiceClient
}

func (s *ArtistsServer) ListArtists(
	ctx context.Context,
	req *connect.Request[artistsv1.ListArtistsRequest],
) (*connect.Response[artistsv1.ListArtistsResponse], error) {
	res, err := s.Client.ListArtists(ctx, req)
	if err != nil {
		return nil, err
	}
	return connect.NewResponse(res.Msg), nil
}

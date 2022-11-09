package music

import (
	"context"
	"net/http"

	"github.com/bufbuild/connect-go"
	"github.com/nikpau/spotimy/apps/gateway/def/music/artists/v1/artistsconnect"
	tracksv1 "github.com/nikpau/spotimy/apps/gateway/def/music/tracks/v1"
	"github.com/nikpau/spotimy/apps/gateway/def/music/tracks/v1/tracksconnect"
	"github.com/nikpau/spotimy/apps/gateway/internal/api"
)

func RegisterTracksComponent(url string, httpClient http.Client) api.Component {
	tracksClient := tracksconnect.NewTrackServiceClient(
		&httpClient,
		url,
		connect.WithGRPC(),
	)

	server := TracksServer{
		Client: tracksClient,
	}

	path, handler := tracksconnect.NewTrackServiceHandler(&server)

	return api.Component{
		Path:        path,
		Handler:     handler,
		ServiceName: artistsconnect.ArtistServiceName,
	}
}

type TracksServer struct {
	Client tracksconnect.TrackServiceClient
}

func (s *TracksServer) ListTracks(
	ctx context.Context,
	req *connect.Request[tracksv1.ListTracksRequest],
) (*connect.Response[tracksv1.ListTracksResponse], error) {
	res, err := s.Client.ListTracks(ctx, req)
	if err != nil {
		return nil, err
	}
	return connect.NewResponse(res.Msg), nil
}

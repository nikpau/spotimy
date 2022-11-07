package music

import (
	"context"
	"fmt"
	"net/http"

	"github.com/bufbuild/connect-go"
	tracksv1 "github.com/nikpau/spotimy/apps/gateway/def/music/tracks/v1"
	"github.com/nikpau/spotimy/apps/gateway/def/music/tracks/v1/tracksconnect"
	"github.com/nikpau/spotimy/apps/gateway/internal/api"
)

func RegisterTrackHistoryComponent(url string, httpClient http.Client) api.Component {
	trackHistoryClient := tracksconnect.NewTrackHistoryServiceClient(
		&httpClient,
		url,
		connect.WithGRPC(),
	)

	server := TrackHistoryServer{
		Client: trackHistoryClient,
	}

	path, handler := tracksconnect.NewTrackHistoryServiceHandler(&server)

	return api.Component{
		Path:        path,
		Handler:     handler,
		ServiceName: tracksconnect.TrackHistoryServiceName,
	}
}

type TrackHistoryServer struct {
	Client tracksconnect.TrackHistoryServiceClient
}

func (s *TrackHistoryServer) ListTrackHistory(
	ctx context.Context,
	req *connect.Request[tracksv1.ListTrackHistoryRequest],
) (*connect.Response[tracksv1.ListTrackHistoryResponse], error) {
	fmt.Println("ListTrackHistory")
	res, err := s.Client.ListTrackHistory(ctx, req)
	if err != nil {
		return nil, err
	}
	return connect.NewResponse(res.Msg), nil
}

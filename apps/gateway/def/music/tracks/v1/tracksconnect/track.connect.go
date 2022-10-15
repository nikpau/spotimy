// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: music/tracks/v1/track.proto

package tracksconnect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	v1 "github.com/nikpau/spotimy/apps/gateway/def/music/tracks/v1"
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
	// TrackServiceName is the fully-qualified name of the TrackService service.
	TrackServiceName = "music.tracks.v1.TrackService"
)

// TrackServiceClient is a client for the music.tracks.v1.TrackService service.
type TrackServiceClient interface {
	ListTracks(context.Context, *connect_go.Request[v1.ListTracksRequest]) (*connect_go.Response[v1.ListTracksResponse], error)
}

// NewTrackServiceClient constructs a client for the music.tracks.v1.TrackService service. By
// default, it uses the Connect protocol with the binary Protobuf Codec, asks for gzipped responses,
// and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the
// connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewTrackServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) TrackServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &trackServiceClient{
		listTracks: connect_go.NewClient[v1.ListTracksRequest, v1.ListTracksResponse](
			httpClient,
			baseURL+"/music.tracks.v1.TrackService/ListTracks",
			opts...,
		),
	}
}

// trackServiceClient implements TrackServiceClient.
type trackServiceClient struct {
	listTracks *connect_go.Client[v1.ListTracksRequest, v1.ListTracksResponse]
}

// ListTracks calls music.tracks.v1.TrackService.ListTracks.
func (c *trackServiceClient) ListTracks(ctx context.Context, req *connect_go.Request[v1.ListTracksRequest]) (*connect_go.Response[v1.ListTracksResponse], error) {
	return c.listTracks.CallUnary(ctx, req)
}

// TrackServiceHandler is an implementation of the music.tracks.v1.TrackService service.
type TrackServiceHandler interface {
	ListTracks(context.Context, *connect_go.Request[v1.ListTracksRequest]) (*connect_go.Response[v1.ListTracksResponse], error)
}

// NewTrackServiceHandler builds an HTTP handler from the service implementation. It returns the
// path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewTrackServiceHandler(svc TrackServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle("/music.tracks.v1.TrackService/ListTracks", connect_go.NewUnaryHandler(
		"/music.tracks.v1.TrackService/ListTracks",
		svc.ListTracks,
		opts...,
	))
	return "/music.tracks.v1.TrackService/", mux
}

// UnimplementedTrackServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedTrackServiceHandler struct{}

func (UnimplementedTrackServiceHandler) ListTracks(context.Context, *connect_go.Request[v1.ListTracksRequest]) (*connect_go.Response[v1.ListTracksResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("music.tracks.v1.TrackService.ListTracks is not implemented"))
}
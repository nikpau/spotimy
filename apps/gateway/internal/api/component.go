package api

import "net/http"

type Component struct {
	Handler     http.Handler
	Path        string
	ServiceName string
}

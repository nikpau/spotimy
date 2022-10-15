package config

import "fmt"

// Config for starting up the api gatway.
type Config struct {
	Port             uint16
	ServerReflection bool

	Services ServicesConfig
}

// Config to connect to all external services.
type ServicesConfig struct {
	Artists ServiceConnectionConfig
}

// Information needed to successfully connect to a service.
type ServiceConnectionConfig struct {
	Host string
	Port uint16
}

func (sc *ServiceConnectionConfig) URL() string {
	return fmt.Sprintf("%s:%d", sc.Host, sc.Port)
}

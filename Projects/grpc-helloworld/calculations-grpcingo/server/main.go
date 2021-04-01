package main

import (
	"context"
	"net"

	"google.golang.org/grpc"
	"google.golang.org/grpc/examples/calculations-grpcingo/protos"
	"google.golang.org/grpc/reflection"
)

type server struct {
	protos.UnimplementedAddServiceServer
}

func main() {

	listener, err := net.Listen("tcp", ":8090")
	if err != nil {
		panic(err)
	}

	srv := grpc.NewServer()
	protos.RegisterAddServiceServer(srv, &server{})
	reflection.Register(srv)

	if e := srv.Serve(listener); e != nil {
		panic(err)
	}
}

func (s *server) Add(ctx context.Context, request *protos.Request) (*protos.Response, error) {
	a, b := request.GetA(), request.GetB()

	result := a + b

	return &protos.Response{Result: result}, nil
}

func (s *server) Multiply(ctx context.Context, request *protos.Request) (*protos.Response, error) {
	a, b := request.GetA(), request.GetB()
	result := a * b
	return &protos.Response{Result: result}, nil
}

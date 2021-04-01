# Creating First gRPC in go lang

> 1. Create a folder named "calculations-grpcingo"
> 1. Create 3 folders **.\client**, **.\protos** , and **.\server**
> 1. Create a file called mathops.proto inside **.\protos** folder.
> 1. Execute the below mentioned command inside the **Protos** folder
> 1. Modify the main.go inside **.\server** folder.
> 1. Modify the main.go inside the **.\client** folder.
> 1. Execute **go mod init** command.
> 1. Execute **go mod tidy** command.

```
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative mathops.proto
```

```
go mod init google.golang.org/grpc/examples/calculations-grpcingo
```

```
go mod tidy
```

### protoc --proto_path=proto --proto_path=third_party --go_out=plugins=grpc:proto service.protogo 
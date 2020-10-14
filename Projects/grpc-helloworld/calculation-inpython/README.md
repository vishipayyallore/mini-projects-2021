# Simple gRPC Sample in Python

## Packages to be installed

1. python -m pip install --upgrade pip
2. python -m pip install grpcio
3. python -m pip install grpcio-tools

## To Generate the files using protoc

**We need to specify the absolute path**

Execute the below mentioned command inside the **Protos** folder

```
python -m grpc_tools.protoc -I=D:\LordKrishna\GitHub\mini-projects-2020\Projects\grpc-helloworld\calculation-inpython\src\protos --python_out=D:\LordKrishna\GitHub\mini-projects-2020\Projects\grpc-helloworld\calculation-inpython\src\protos\generated --grpc_python_out=D:\LordKrishna\GitHub\mini-projects-2020\Projects\grpc-helloworld\calculation-inpython\src\protos\generated calculations.proto
```

python -m grpc_tools.protoc -I=. --python_out=. --grpc_python_out=. calculations.proto

protoc -I=D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/src/protos D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/src/protos/calculations.proto --js_out=import_style=commonjs,binary:D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/src/protos --grpc_out=D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/src/protos --plugin=protoc-gen-grpc=D:/LordKrishna/GitHub/learning_node_in_2020/calculation-grpcdemo/node_modules/.bin/grpc_tools_node_protoc_plugin.cmd


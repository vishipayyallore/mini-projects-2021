
from __future__ import print_function
import logging

import grpc

import sys
sys.path.insert(0, '../protos/generated')

import calculations_pb2_grpc as calculations_service
import calculations_pb2 as calculations_messages


def run():

    # NOTE(gRPC Python Team): .close() is possible on a channel and should be
    # used in circumstances in which the with statement does not fit the needs
    # of the code.
    with grpc.insecure_channel('localhost:50051') as channel:

        stub = calculations_service.CalculationServiceStub(channel)

        print("Invoking AddNumbers() in gRPC Server.")

        response = stub.AddNumbers(calculations_messages.AddRequest(value1=1001, value2=2002))
    
        print("Output received: ", response.sum)


if __name__ == '__main__':
    logging.basicConfig()
    run()

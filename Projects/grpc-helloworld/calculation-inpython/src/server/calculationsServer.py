

from concurrent import futures
import logging

import grpc

import calculations_pb2_grpc as calculations_service
import calculations_pb2 as calculations_messages

class CalculationsServer(calculations_service.CalculationsService):

    def  addNumbers(caller, callback) {


/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcClientSettings
} from '@ngx-grpc/common';
import { GRPC_CLIENT_FACTORY, GrpcHandler } from '@ngx-grpc/core';
import { Metadata, Status } from 'grpc-web';
import { Observable } from 'rxjs';
import * as thisProto from './echo.pb';
import { GRPC_ECHO_SERVICE_CLIENT_SETTINGS } from './echo.pbconf';
@Injectable({
  providedIn: 'root'
})
export class EchoServiceClient {
  private client: GrpcClient;

  constructor(
    @Inject(GRPC_ECHO_SERVICE_CLIENT_SETTINGS) settings: GrpcClientSettings,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('echo.EchoService', settings);
  }

  /**
   * Unary RPC
   * @param thisProto.EchoRequest request
   * @param Metadata metadata
   * @return thisProto.EchoResponse
   */
  echoOnce(
    requestData: thisProto.EchoRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.EchoResponse> {
    return this.handler.handleUnary({
      type: GrpcCallType.unary,
      client: this.client,
      path: '/echo.EchoService/EchoOnce',
      requestData,
      requestMetadata,
      requestClass: thisProto.EchoRequest,
      responseClass: thisProto.EchoResponse
    });
  }

  /**
   * Server streaming RPC
   * @param thisProto.EchoRequest request
   * @param Metadata metadata
   * @return thisProto.EchoResponse
   */
  echoStream(
    requestData: thisProto.EchoRequest,
    requestMetadata: Metadata = {}
  ): Observable<thisProto.EchoResponse | Status> {
    return this.handler.handleServerStream({
      type: GrpcCallType.serverStream,
      client: this.client,
      path: '/echo.EchoService/EchoStream',
      requestData,
      requestMetadata,
      requestClass: thisProto.EchoRequest,
      responseClass: thisProto.EchoResponse
    });
  }
}

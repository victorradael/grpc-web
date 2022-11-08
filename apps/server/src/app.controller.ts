import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('TemplateService', 'TemplateFunction')
  TemplateFunction(
    data,
    metadata: Metadata,
    serverUnaryCall: ServerUnaryCall<any, any>,
  ) {
    // console.log(metadata.get('user-agent'));
    // console.log(metadata.getMap());
    // console.log(metadata.toHttp2Headers());
    // console.log(metadata.toJSON());
    // console.log(serverUnaryCall.addListener('GT', () => 'D'));
    // console.log(serverUnaryCall.getPeer());
    // console.log(serverUnaryCall.getPath());
    // console.log(serverUnaryCall.getDeadline());

    const logBody = {
      peer: serverUnaryCall.getPeer(),
      path: serverUnaryCall.getPath(),
      deadline: serverUnaryCall.getDeadline(),
      metadata: metadata.toHttp2Headers(),
    };

    console.log(logBody);

    return { message: 'OK' };
  }
}

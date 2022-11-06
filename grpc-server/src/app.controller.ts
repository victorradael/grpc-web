import { Metadata } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data, metadata: Metadata) {
    console.log(metadata);

    return { message: 'OK' };
  }
}

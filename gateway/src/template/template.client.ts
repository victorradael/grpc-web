import {
  ClientsProviderAsyncOptions,
  GrpcOptions,
  Transport,
} from '@nestjs/microservices';
// import { credentials } from '@grpc/grpc-js';
import { join } from 'path';

export class TemplateClientConfiguration {
  public name = 'TemplateClientConfiguration';
  private config: GrpcOptions = {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'template',
      // credentials: credentials.createSsl(),
      protoPath: join(__dirname, '..', '..', 'proto', 'service.proto'),
      loader: {
        keepCase: true,
        enums: String,
        defaults: false,
      },
    },
  };
  providerOptions: ClientsProviderAsyncOptions = {
    name: this.name,
    ...this.config,
  };
}

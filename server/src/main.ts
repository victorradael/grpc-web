import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  console.log(join(__dirname, '../proto/service.proto'));
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: 'template',
        protoPath: join(__dirname, '..', 'proto', 'service.proto'),
      },
    },
  );

  console.log(join(__dirname, '..', 'proto', 'service.proto'));

  await app.listen();
}
bootstrap();

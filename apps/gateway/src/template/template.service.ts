import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { TemplateClientConfiguration } from './template.client';

export class TemplateService implements OnModuleInit {
  templateGrpcService: any;

  constructor(
    @Inject(TemplateClientConfiguration.name)
    private readonly grpcClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.templateGrpcService =
      this.grpcClient.getService<'TemplateService'>('TemplateService');
  }

  async templateGrpcRequest(data, metadata) {
    return lastValueFrom(
      this.templateGrpcService.TemplateFunction(data, metadata),
    ).catch((err) => {
      console.log(err);
    });
  }
}

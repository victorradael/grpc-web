import { Module } from '@nestjs/common';
import { TemplateService } from './template.service';
import { TemplateController } from './template.controller';
import { ClientsModule } from '@nestjs/microservices';
import { TemplateClientConfiguration } from './template.client';

const client = new TemplateClientConfiguration();

@Module({
  imports: [ClientsModule.register([client.providerOptions])],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}

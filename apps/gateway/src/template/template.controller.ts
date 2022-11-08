import { Controller, Get } from '@nestjs/common';
import { TemplateService } from './template.service';

@Controller('template')
export class TemplateController {
  constructor(private templateService: TemplateService) {}

  @Get()
  async templateRequest() {
    const response = await this.templateService.templateGrpcRequest({}, {});

    return response;
  }
}

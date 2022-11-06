import { Module } from '@nestjs/common';
import { TemplateModule } from './template/template.module';

@Module({
  imports: [TemplateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

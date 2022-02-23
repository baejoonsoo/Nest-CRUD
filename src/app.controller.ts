import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // cotroller에서는 url을 가져와서 사용

  @Get('/hello')
  sayHello(): string {
    return this.appService.getHi();
  }
}

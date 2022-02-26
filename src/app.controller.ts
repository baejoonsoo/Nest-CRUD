import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  main(): string {
    return 'Welcome to my Movie API';
  }
}

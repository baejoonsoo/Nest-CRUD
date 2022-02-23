import { Injectable } from '@nestjs/common';

// 비지니스 로직은 service에서 작성

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getHi(): string {
    return 'hello everyone';
  }
}

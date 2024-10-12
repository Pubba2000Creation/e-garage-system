import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from backend!';
  }

  async gethello(): Promise<string> {
    return 'Hello World from backendsasa!';
  }
}

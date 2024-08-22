import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.services';

@Controller()
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  async getHello() {
    const res = await this.testService.getHello();
    console.log(res);
    return '123';
  }
}

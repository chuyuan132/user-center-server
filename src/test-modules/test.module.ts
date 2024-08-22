import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.services';

@Module({
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}

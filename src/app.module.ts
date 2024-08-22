import { TestModule } from './test-modules/test.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [TestModule],
})
export class AppModule {}

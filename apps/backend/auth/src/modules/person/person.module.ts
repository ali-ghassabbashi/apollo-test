import { Module } from '@nestjs/common';
import { SharedTypeormModule } from '@apollo-test/shared';

@Module({
  imports: [SharedTypeormModule]
})
export class PersonModule {}

import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, CatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

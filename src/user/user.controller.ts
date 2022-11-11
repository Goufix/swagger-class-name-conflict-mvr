import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { User } from './user-response.type';

@Controller('user')
export class UserController {
  @Get()
  @ApiResponse({
    type: User,
  })
  getUser() {
    return null;
  }
}

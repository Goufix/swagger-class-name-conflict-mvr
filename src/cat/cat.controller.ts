import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Cat } from './cat-response.type';

@Controller('cat')
export class CatController {
  @Get()
  @ApiResponse({
    type: Cat,
  })
  getUser() {
    return null;
  }
}

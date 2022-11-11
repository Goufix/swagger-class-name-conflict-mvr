import { ApiProperty } from '@nestjs/swagger';

class Action {
  @ApiProperty({
    type: String,
  })
  type: string;
}

export class User {
  @ApiProperty({
    type: String,
  })
  name: string;

  @ApiProperty({
    type: Number,
  })
  age: number;

  @ApiProperty({
    type: [Action],
  })
  actions: Action[];
}

import { ApiProperty } from '@nestjs/swagger';

class Action {
  @ApiProperty({
    type: String,
  })
  name: string;
}

export class Cat {
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

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGalaxyDto {
  @ApiProperty({ example: 'Milki Way' })
  name: string;

  @ApiPropertyOptional({ example: 'Our galaxy' })
  description?: string;

  @ApiProperty({ example: 1.5 })
  position_x: number;

  @ApiProperty({ example: 2.3 })
  position_y: number;

  @ApiProperty({ example: 0.0 })
  position_z: number;
}

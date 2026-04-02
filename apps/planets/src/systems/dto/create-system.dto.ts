// create-planet.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSystemDto {
  @ApiProperty({ example: 'Solar System' })
  name: string;

  @ApiPropertyOptional({ example: 'The system containing our planet' })
  description?: string;

  @ApiProperty({ example: 0 })
  position_x: number;

  @ApiProperty({ example: 0 })
  position_y: number;

  @ApiProperty({ example: 0 })
  position_z: number;

  @ApiProperty({ example: '' })
  galaxy_id: string;
}

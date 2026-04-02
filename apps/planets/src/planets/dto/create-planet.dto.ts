// create-planet.dto.ts
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PlanetType } from '../entities/planet.entity';

export class CreatePlanetDto {
  @ApiProperty({ example: 'Earth' })
  name: string;

  @ApiPropertyOptional({ example: 'Our home planet' })
  description?: string;

  @ApiPropertyOptional({ enum: PlanetType, default: PlanetType.TERRESTRIAL })
  type?: PlanetType;

  @ApiProperty({ example: 1.5 })
  position_x: number;

  @ApiProperty({ example: 2.3 })
  position_y: number;

  @ApiProperty({ example: 0.0 })
  position_z: number;

  @ApiPropertyOptional({ example: false })
  rings?: boolean;

  @ApiPropertyOptional()
  ring_inner_radius_km?: number;

  @ApiPropertyOptional()
  ring_outer_radius_km?: number;

  @ApiPropertyOptional({ example: '#FFFFFF' })
  ring_color_hex?: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  system_id: string;
}

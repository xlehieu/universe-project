import { PartialType } from '@nestjs/mapped-types';
import { CreateMoonDto } from './create-moon.dto';

export class UpdateMoonDto extends PartialType(CreateMoonDto) {
  id: number;
}

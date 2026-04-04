import { PartialType } from '@nestjs/mapped-types';
import { CreateGalaxyDto } from './create-galaxy.dto';

export class UpdateGalaxyDto extends PartialType(CreateGalaxyDto) {
  id: string;
}

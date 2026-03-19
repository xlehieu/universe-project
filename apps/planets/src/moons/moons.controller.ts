import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MoonsService } from './moons.service';
import { CreateMoonDto } from './dto/create-moon.dto';
import { UpdateMoonDto } from './dto/update-moon.dto';

@Controller()
export class MoonsController {
  constructor(private readonly moonsService: MoonsService) {}

  @MessagePattern('createMoon')
  create(@Payload() createMoonDto: CreateMoonDto) {
    return this.moonsService.create(createMoonDto);
  }

  @MessagePattern('findAllMoons')
  findAll() {
    return this.moonsService.findAll();
  }

  @MessagePattern('findOneMoon')
  findOne(@Payload() id: number) {
    return this.moonsService.findOne(id);
  }

  @MessagePattern('updateMoon')
  update(@Payload() updateMoonDto: UpdateMoonDto) {
    return this.moonsService.update(updateMoonDto.id, updateMoonDto);
  }

  @MessagePattern('removeMoon')
  remove(@Payload() id: number) {
    return this.moonsService.remove(id);
  }
}

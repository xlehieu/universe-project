import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SystemsService } from './systems.service';
import { CreateSystemDto } from './dto/create-system.dto';
import { UpdateSystemDto } from './dto/update-system.dto';

@Controller()
export class SystemsController {
  constructor(private readonly systemsService: SystemsService) {}

  @MessagePattern('createSystem')
  create(@Payload() createSystemDto: CreateSystemDto) {
    return this.systemsService.create(createSystemDto);
  }

  @MessagePattern('findAllSystems')
  findAll() {
    return this.systemsService.findAll();
  }

  @MessagePattern('findOneSystem')
  findOne(@Payload() id: number) {
    return this.systemsService.findOne(id);
  }

  @MessagePattern('updateSystem')
  update(@Payload() updateSystemDto: UpdateSystemDto) {
    return this.systemsService.update(updateSystemDto.id, updateSystemDto);
  }

  @MessagePattern('removeSystem')
  remove(@Payload() id: number) {
    return this.systemsService.remove(id);
  }
}

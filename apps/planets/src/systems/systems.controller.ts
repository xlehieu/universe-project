import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SystemsService } from './systems.service';
import { CreateSystemDto } from './dto/create-system.dto';
import { UpdateSystemDto } from './dto/update-system.dto';

@Controller()
export class SystemsController {
  constructor(private readonly systemsService: SystemsService) {}

  @MessagePattern('systems.create')
  create(@Payload() createSystemDto: CreateSystemDto) {
    return this.systemsService.create(createSystemDto);
  }

  @MessagePattern('systems.findAll')
  findAll() {
    return this.systemsService.findAll();
  }

  @MessagePattern('systems.findOne')
  findOne(@Payload() id: string) {
    return this.systemsService.findOne(id);
  }
  @MessagePattern('systems.getSystemWithGalaxy')
  getSystemWithGalaxy(@Payload() id: string) {
    return this.systemsService.getSystemWithGalaxy(id);
  }

  @MessagePattern('systems.update')
  update(@Payload() updateSystemDto: UpdateSystemDto) {
    return this.systemsService.update(updateSystemDto.id, updateSystemDto);
  }

  @MessagePattern('systems.remove')
  remove(@Payload() id: number) {
    return this.systemsService.remove(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateSystemDto } from 'apps/planets/src/systems/dto/create-system.dto';
import { UpdateSystemDto } from 'apps/planets/src/systems/dto/update-system.dto';

@Controller('systems')
export class SystemsController {
  constructor(@Inject('PLANETS_CLIENT') private planetsService: ClientProxy) {}

  @Post()
  create(@Body() createSystemDto: CreateSystemDto) {
    return this.planetsService.send('systems.create', createSystemDto);
  }

  @Get()
  findAll() {
    return this.planetsService.send('systems.findAll', {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planetsService.send('systems.findOne', { id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSystemDto: UpdateSystemDto) {
    return this.planetsService.send('systems.update', {
      id: +id,
      data: updateSystemDto,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planetsService.send('systems.remove', { id: +id });
  }
}

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
import { CreateGalaxyDto } from 'apps/planets/src/galaxies/dto/create-galaxy.dto';

@Controller('galaxy')
export class GalaxyController {
  constructor(@Inject('PLANETS_CLIENT') private planetsService: ClientProxy) {}

  @Post()
  create(@Body() createGalaxyDto: CreateGalaxyDto) {
    return this.planetsService.send('galaxy.create', createGalaxyDto);
  }

  @Get()
  findAll() {
    return this.planetsService.send('galaxy.findAll', {});
  }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return this.galaxyService.findOne(+id);
  //   }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateGalaxyDto: UpdateGalaxyDto) {
  //     return this.galaxyService.update(+id, updateGalaxyDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.galaxyService.remove(+id);
  //   }
}

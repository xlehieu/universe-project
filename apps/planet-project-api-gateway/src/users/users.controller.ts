import { Controller, Get, Inject } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(@Inject('USERS_CLIENT') private userClient: ClientProxy) {}

  @Get()
  findAll() {
    return this.userClient.send();
  }
}

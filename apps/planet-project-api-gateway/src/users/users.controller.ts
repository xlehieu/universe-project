import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(@Inject('USERS_CLIENT') private userClient: ClientProxy) {}

  @Get()
  findAll() {
    return this.userClient.send('users.findAll', {});
  }
  @Get('/wait')
  async wait() {
    await new Promise((resolve) => setTimeout(resolve, 20000));
    return this.userClient.send('users.wait', {});
  }
}

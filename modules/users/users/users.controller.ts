import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    this.usersService.createOne({ email: 'andy@user.test' });
    this.usersService.createOne({ email: 'betty@user.test' });
  }

  @Get()
  findMany() {
    return this.usersService.findMany();
  }
}

import { Controller, Get } from '@nestjs/common';
import { UserFindResultDto } from './user-find-result.dto';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
    this.usersService.createOne({ email: 'andy@user.test' });
    this.usersService.createOne({ email: 'betty@user.test' });
  }

  @Get()
  findMany(): Promise<UserFindResultDto[]> {
    return this.usersService.findMany();
  }
}

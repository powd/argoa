import { Module } from '@nestjs/common';
import { UsersMemoryRepository } from './users-memory.repository';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: UsersRepository,
      useClass: UsersMemoryRepository,
    },
  ],
})
export class UsersModule {}

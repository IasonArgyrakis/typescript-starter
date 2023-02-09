import { Module } from '@nestjs/common';
import { DepartmentUsersService } from './department-users.service';
import { DepartmentUsersController } from './department-users.controller';

@Module({
  controllers: [DepartmentUsersController],
  providers: [DepartmentUsersService]
})
export class DepartmentUsersModule {}

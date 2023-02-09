import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentUsersService } from './department-users.service';
import { CreateDepartmentUserDto } from './dto/create-department-user.dto';
import { UpdateDepartmentUserDto } from './dto/update-department-user.dto';

@Controller('department-users')
export class DepartmentUsersController {
  constructor(private readonly departmentUsersService: DepartmentUsersService) {}

  @Post()
  create(@Body() createDepartmentUserDto: CreateDepartmentUserDto) {
    return this.departmentUsersService.create(createDepartmentUserDto);
  }

  @Get()
  findAll() {
    return this.departmentUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartmentUserDto: UpdateDepartmentUserDto) {
    return this.departmentUsersService.update(+id, updateDepartmentUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentUsersService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateDepartmentUserDto } from './dto/create-department-user.dto';
import { UpdateDepartmentUserDto } from './dto/update-department-user.dto';

@Injectable()
export class DepartmentUsersService {
  create(createDepartmentUserDto: CreateDepartmentUserDto) {
    return 'This action adds a new departmentUser';
  }

  findAll() {
    return `This action returns all departmentUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} departmentUser`;
  }

  update(id: number, updateDepartmentUserDto: UpdateDepartmentUserDto) {
    return `This action updates a #${id} departmentUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} departmentUser`;
  }
}

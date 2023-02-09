import { PartialType } from '@nestjs/swagger';
import { CreateDepartmentUserDto } from './create-department-user.dto';

export class UpdateDepartmentUserDto extends PartialType(CreateDepartmentUserDto) {}

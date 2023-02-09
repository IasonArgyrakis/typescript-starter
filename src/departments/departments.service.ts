import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Prisma, Department } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  async department(
    departmentWhereUniqueInput: Prisma.DepartmentWhereUniqueInput,
  ): Promise<Department | null> {
    return this.prisma.department.findUnique({
      where: departmentWhereUniqueInput,
    });
  }

  async departments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DepartmentWhereUniqueInput;
    where?: Prisma.DepartmentWhereInput;
    orderBy?: Prisma.DepartmentOrderByWithRelationInput;
  }): Promise<Department[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.department.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDepartment(data: Prisma.DepartmentCreateInput): Promise<Department> {
    return this.prisma.department.create({
      data,
    });
  }

  async updateDepartment(params: {
    where: Prisma.DepartmentWhereUniqueInput;
    data: Prisma.DepartmentUpdateInput;
  }): Promise<Department> {
    const { where, data } = params;
    return this.prisma.department.update({
      data,
      where,
    });
  }

  async deleteDepartment(where: Prisma.DepartmentWhereUniqueInput): Promise<Department> {
    return this.prisma.department.delete({
      where,
    });
  }
  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  findAll() {
    return `This action returns all departments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}

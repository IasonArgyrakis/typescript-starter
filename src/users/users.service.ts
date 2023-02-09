import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User as PrismaUser} from '@prisma/client';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

 

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    let user= await this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    }).then((model)=>{return model});
    return new User(user)

  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<PrismaUser[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<PrismaUser> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<PrismaUser> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<PrismaUser> {
    return this.prisma.user.delete({
      where,
    });
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users({skip:0,take:5})
  }

  findOne(id: number) {
      return this.user({ id: id })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

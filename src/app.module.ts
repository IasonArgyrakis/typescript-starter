

import { UsersService } from './users/users.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './departments/departments.module';
import { PrismaModule } from './prisma/prisma.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Department } from './departments/entities/department.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'username',
      password: 'password',
      database: 'docker-nest-postgres',
      entities: [User,Department],
      synchronize: true,
    }),
    PrismaModule,UsersModule, AuthModule, DepartmentsModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}

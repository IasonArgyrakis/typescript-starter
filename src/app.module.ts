import { PrismaService } from './prisma.service';
import { UsersService } from './users/users.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './departments/departments.module';

@Module({
  imports: [UsersModule, AuthModule, DepartmentsModule],
  controllers: [AppController, UsersController],
  providers: [PrismaService, AppService, UsersService],
})
export class AppModule {}

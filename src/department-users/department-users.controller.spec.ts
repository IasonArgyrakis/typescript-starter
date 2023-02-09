import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentUsersController } from './department-users.controller';
import { DepartmentUsersService } from './department-users.service';

describe('DepartmentUsersController', () => {
  let controller: DepartmentUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentUsersController],
      providers: [DepartmentUsersService],
    }).compile();

    controller = module.get<DepartmentUsersController>(DepartmentUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

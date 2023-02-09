import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentUsersService } from './department-users.service';

describe('DepartmentUsersService', () => {
  let service: DepartmentUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentUsersService],
    }).compile();

    service = module.get<DepartmentUsersService>(DepartmentUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

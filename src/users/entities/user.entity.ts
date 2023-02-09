import { Department } from './../../departments/entities/department.entity';
import { Exclude } from "class-transformer";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DepartmentUser } from 'src/department-users/entities/department-user.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: String;
  @Column()
  firstName: String;
  @Column()
  lastName: String;
  @Column()
  afm: String;


   @OneToMany(type => DepartmentUser, Department => DepartmentUser.userId)
    departmets: DepartmentUser[];
  

  @Exclude()
  password: string;

  constructor(partial: Partial<User>) {
    console.log(partial)
    Object.assign(this, partial);
  }


}

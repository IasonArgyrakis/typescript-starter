import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DepartmentUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  static userId: number;

  @Column()
  static departmentId: number;
  
}

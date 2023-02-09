import { Exclude } from "class-transformer";

export class User {
  id: number;
  email: String;
  firstName: String;
  lastName: String;
  afm: String;
  

  @Exclude()
  password: string;

  constructor(partial: Partial<User>) {
    console.log(partial)
    Object.assign(this, partial);
  }

}

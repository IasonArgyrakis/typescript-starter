
export class Department {
  id: number;
  name: String;
  

  constructor(partial: Partial<Department>) {
  
    Object.assign(this, partial);
  }

}

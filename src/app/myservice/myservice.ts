import { Injectable} from '@angular/core';

@Injectable()
export class Myservice {
  public name:any
  public user = { name :''}
  constructor() {}
  testFn(){
    this.name = "my service name";
    console.log(this.name);
  }

}

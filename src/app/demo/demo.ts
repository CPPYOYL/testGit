import { Component ,EventEmitter ,OnInit} from '@angular/core';
import { Myservice } from '../myservice/myservice';

@Component({
  selector: 'demo',
  templateUrl: './demo.html',
  styleUrls: ['./demo.scss'],
  inputs: [
        'title',
    ],
    outputs: [
        'selected',
    ]
})
export class DemoComponent {
  public title:any;
  public selected = new EventEmitter<any>();
  public name:any;
  public welcome: string;
  public isOn = false;
  constructor(public  myservice : Myservice ){}
  ngOnInit() {
  	 this.name = "hello world" + this.myservice.user.name;
  	 this.welcome = this.myservice. user.name + 'hello';
  }

  clicked() { this.isOn = !this.isOn; }

  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }

  click() { this.selected.emit(this.title); }

  testmyserviceFn(){
  	this.myservice.testFn();
  }

}

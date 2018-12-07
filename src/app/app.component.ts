import { Component } from '@angular/core';
import {BreakpointObserver, Breakpoints , MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BIPtest';

  public Viewport : string = '';
  
  constructor(
  	public breakpointObserver: BreakpointObserver,
  	) {

    // this.initBreakpointFn('pagetype');
    // this.testIterator();
    this.f().then(v => console.log(v))
  }
  async  f() {
    // 等同于
    // return 123;
    return await 123;
  }

  testIterator (){
    // function* foo() {
    //   yield 1;
    //   yield 2;
    //   yield 3;
    //   yield 4;
    //   yield 5;
    //   return 6;
    // }

    // for (let v of foo()) {
    //   console.log(v);
    // }
  }
 
  initBreakpointFn(pagetype){
    const CXbreakpoints = [
      "(min-width: 0px) and (max-width: 599px)",
      "(min-width: 600px) and (max-width: 1007px)",
      "(min-width: 1008px) and (orientation: landscape)",
    ]
    const AMbreakpoints = [
        "(min-width: 0px) and (max-width: 599px)",
        "(min-width: 600px) and (max-width: 1007px)",
        "(min-width: 1008px) and (orientation: landscape)",
    ]
    let breakpoints = true ? CXbreakpoints : AMbreakpoints;
    this.breakpointObserver.observe(breakpoints).subscribe(result => {
      let arr = [];
      let breakpoints = result.breakpoints;
      for(let key in breakpoints){ arr.push(breakpoints[key]); }
      let [smallViewport,mediumViewport,largeViewport] = [...arr];

      this.Viewport = (smallViewport  ? "small" : '')   + 
                      (mediumViewport ? "medium" : '')  + 
                      (largeViewport  ? "large" : '')   + '-viewport';

    });
  }

  selectedFn(e){
  	console.log(e);
  	this.title = 'BIP';
  }
}

import { TestBed, async ,ComponentFixture  } from '@angular/core/testing';
import { DemoComponent } from './demo';
import { Myservice } from '../myservice/myservice';


class MockMyservice {
  name = true;
  user = { name: 'Test User'};
};

describe('LightswitchComp', () => {


  let userServiceStub: Partial<Myservice>;
  let component: DemoComponent;
  let userService : Myservice ;
  let fixture: ComponentFixture<DemoComponent>;
  
  beforeEach(async(() => {
      userServiceStub = {
        name: true,
        user: { name: 'Test User'}
      };

      TestBed.configureTestingModule({
           declarations: [ DemoComponent ],
       
           providers:    [ {provide: Myservice, useValue: userServiceStub } ]
      });
      fixture = TestBed.createComponent(DemoComponent);
      component    = fixture.componentInstance;
      userService = TestBed.get(Myservice);
  }));

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(false);

    userServiceStub.name = false;
    expect(userService.name).toBe(true);
  });

  // let component: DemoComponent;
  // let comp:any;
  // let userService : Myservice ;
  // let fixture: ComponentFixture<DemoComponent>;
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [
  //     DemoComponent,
  //     ],
  //     imports: [],
  //     providers: [
  //       DemoComponent,
  //       { provide: Myservice , useClass: MockMyservice }
  //     ]
  //   })
  //   .compileComponents();
  //   // fixture = TestBed.createComponent(DemoComponent);
  //   // component = fixture.componentInstance;
  //   // comp = TestBed.get(Myservice);
  //   component = TestBed.get(DemoComponent);
  //   userService = TestBed.get(Myservice);
  //   // fixture.detectChanges();
  //   // var Myservice = TestBed.get(Myservice);
  // }));

  // it('should not have welcome message after construction', () => {
  //   expect(component.welcome).toBeUndefined();
  // });
  
  // it('should not have welcome message after construction', () => {
  //   component.ngOnInit();
  //   expect(component.name).toContain(userService.user.name);
  // });

  // it('#clicked() should toggle #isOn', () => {
  //   // const comp = new DemoComponent();
  //   expect(component.isOn).toBe(false, 'off at first');
  //   component.clicked();
  //   expect(component.isOn).toBe(true, 'on after click');
  //   component.clicked();
  //   expect(component.isOn).toBe(false, 'off after second click');
  // });

  // it('#clicked() should set #message to "is on"', () => {
  //   // const comp = new DemoComponent();
  //   expect(component.message).toMatch(/is off/i, 'off at first');
  //   component.clicked();
  //   expect(component.message).toMatch(/is on/i, 'on after clicked');
  // });
  // it('raises the selected event when clicked', () => {
  //   // const comp = new DemoComponent();
  //   // comp.selected.subscribe(selectedHero => expect(selectedHero).toBe(hero));
  //   const title = "I am a tile";
  //   component.title = title;
  //   component.selected.subscribe(selectedHero => expect(selectedHero).toBe("I am a tile"));
  //   component.click();
  //   expect(component.title).toMatch(/tile/i, 'has title');
  //   console.log("comp.title",component.title);
  // });
});

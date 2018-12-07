import { TestBed, async ,ComponentFixture  , ComponentFixtureAutoDetect  } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { ChildComponent } from './child';
import { Myservice } from '../myservice/myservice';


class MockMyservice {
  name = true;
  user = { name: 'Test User'};
};

describe('ChildComp', () => {
    let component: ChildComponent;
    let fixture: ComponentFixture<ChildComponent>;
    let h1:        HTMLElement;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ChildComponent ],
        providers: [
          // DemoComponent,
          // { provide: Myservice , useClass: MockMyservice }
           { provide: ComponentFixtureAutoDetect, useValue: true }
        ]
      })
      .compileComponents();
    }));


    beforeEach(() => {
      fixture = TestBed.createComponent(ChildComponent);
      component = fixture.componentInstance;
      h1 = fixture.nativeElement.querySelector('h1');
      // expect(h1.textContent).toEqual('');
      // fixture.detectChanges();
    });

    it('should display original title', () => {
      expect(h1.textContent).toContain(component.title);
    });

    it('should still see original title after comp.title change', () => {
      const oldTitle = component.title;
      component.title = 'Test Title';
      // Displayed title is old because Angular didn't hear the change :(
      expect(h1.textContent).toContain(oldTitle);
    });
    
    it('should display updated title after detectChanges', () => {
      component.title = 'Test Title';
      fixture.detectChanges(); // detect changes explicitly
      expect(h1.textContent).toContain(component.title);
    });

    it('should create', () => {
      expect(component).toBeDefined();
    });

    it('should contain "banner works!"', () => {

  
      const bannerElement: HTMLElement = fixture.nativeElement;
      const p = bannerElement.querySelector('p');
      expect(p.textContent).toContain('banner works!');
    });

     it('should contain "banner works!2"', () => {

      const bannerDe: DebugElement = fixture.debugElement;
      const bannerEl: HTMLElement = bannerDe.nativeElement;
      const p = bannerEl.querySelector('p');

      expect(p.textContent).toContain('banner works!');
    });

});

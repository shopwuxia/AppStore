import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2fourthComponent } from './page2fourth.component';

describe('Page2fourthComponent', () => {
  let component: Page2fourthComponent;
  let fixture: ComponentFixture<Page2fourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2fourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2fourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

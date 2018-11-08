import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2sixthComponent } from './page2sixth.component';

describe('Page2sixthComponent', () => {
  let component: Page2sixthComponent;
  let fixture: ComponentFixture<Page2sixthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2sixthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2sixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

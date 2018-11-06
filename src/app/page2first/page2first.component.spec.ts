import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2firstComponent } from './page2first.component';

describe('Page2firstComponent', () => {
  let component: Page2firstComponent;
  let fixture: ComponentFixture<Page2firstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2firstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2firstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

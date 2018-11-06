import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1HeadComponent } from './page1-head.component';

describe('Page1HeadComponent', () => {
  let component: Page1HeadComponent;
  let fixture: ComponentFixture<Page1HeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1HeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1HeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

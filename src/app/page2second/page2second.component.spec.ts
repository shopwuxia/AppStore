import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2secondComponent } from './page2second.component';

describe('Page2secondComponent', () => {
  let component: Page2secondComponent;
  let fixture: ComponentFixture<Page2secondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2secondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2secondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

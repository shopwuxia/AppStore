import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2thirdComponent } from './page2third.component';

describe('Page2thirdComponent', () => {
  let component: Page2thirdComponent;
  let fixture: ComponentFixture<Page2thirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2thirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2thirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1ContentComponent } from './page1-content.component';

describe('Page1ContentComponent', () => {
  let component: Page1ContentComponent;
  let fixture: ComponentFixture<Page1ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

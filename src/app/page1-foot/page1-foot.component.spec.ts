import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1FootComponent } from './page1-foot.component';

describe('Page1FootComponent', () => {
  let component: Page1FootComponent;
  let fixture: ComponentFixture<Page1FootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page1FootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1FootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

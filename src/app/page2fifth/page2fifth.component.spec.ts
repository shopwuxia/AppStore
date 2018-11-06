import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2fifthComponent } from './page2fifth.component';

describe('Page2fifthComponent', () => {
  let component: Page2fifthComponent;
  let fixture: ComponentFixture<Page2fifthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2fifthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2fifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

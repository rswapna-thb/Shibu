import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEntryScreenComponent } from './employee-entry-screen.component';

describe('EmployeeEntryScreenComponent', () => {
  let component: EmployeeEntryScreenComponent;
  let fixture: ComponentFixture<EmployeeEntryScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEntryScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEntryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

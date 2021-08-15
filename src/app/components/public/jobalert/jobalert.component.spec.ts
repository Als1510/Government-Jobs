import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobalertComponent } from './jobalert.component';

describe('JobalertComponent', () => {
  let component: JobalertComponent;
  let fixture: ComponentFixture<JobalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobalertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

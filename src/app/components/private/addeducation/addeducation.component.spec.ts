import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeducationComponent } from './addeducation.component';

describe('AddeducationComponent', () => {
  let component: AddeducationComponent;
  let fixture: ComponentFixture<AddeducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

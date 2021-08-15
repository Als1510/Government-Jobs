import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddescriptionComponent } from './adddescription.component';

describe('AdddescriptionComponent', () => {
  let component: AdddescriptionComponent;
  let fixture: ComponentFixture<AdddescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

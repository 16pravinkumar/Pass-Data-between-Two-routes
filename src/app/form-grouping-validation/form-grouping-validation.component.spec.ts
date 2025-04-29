import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupingValidationComponent } from './form-grouping-validation.component';

describe('FormGroupingValidationComponent', () => {
  let component: FormGroupingValidationComponent;
  let fixture: ComponentFixture<FormGroupingValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupingValidationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupingValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

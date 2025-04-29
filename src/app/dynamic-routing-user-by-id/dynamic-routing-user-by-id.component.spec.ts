import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRoutingUserByIdComponent } from './dynamic-routing-user-by-id.component';

describe('DynamicRoutingUserByIdComponent', () => {
  let component: DynamicRoutingUserByIdComponent;
  let fixture: ComponentFixture<DynamicRoutingUserByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRoutingUserByIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRoutingUserByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParatentDataComponent } from './child-to-paratent-data.component';

describe('ChildToParatentDataComponent', () => {
  let component: ChildToParatentDataComponent;
  let fixture: ComponentFixture<ChildToParatentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildToParatentDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildToParatentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

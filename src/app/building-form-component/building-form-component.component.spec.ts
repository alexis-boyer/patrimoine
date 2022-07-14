import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingFormComponentComponent } from './building-form-component.component';

describe('BuildingFormComponentComponent', () => {
  let component: BuildingFormComponentComponent;
  let fixture: ComponentFixture<BuildingFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

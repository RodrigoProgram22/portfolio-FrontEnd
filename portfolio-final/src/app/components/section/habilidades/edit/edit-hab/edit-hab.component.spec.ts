import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHabComponent } from './edit-hab.component';

describe('EditHabComponent', () => {
  let component: EditHabComponent;
  let fixture: ComponentFixture<EditHabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

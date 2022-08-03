import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHabComponent } from './add-hab.component';

describe('AddHabComponent', () => {
  let component: AddHabComponent;
  let fixture: ComponentFixture<AddHabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEduComponent } from './add-edu.component';

describe('AddEduComponent', () => {
  let component: AddEduComponent;
  let fixture: ComponentFixture<AddEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

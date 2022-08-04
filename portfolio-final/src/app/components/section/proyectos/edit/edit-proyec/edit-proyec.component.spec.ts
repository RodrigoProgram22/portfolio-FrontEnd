import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProyecComponent } from './edit-proyec.component';

describe('EditProyecComponent', () => {
  let component: EditProyecComponent;
  let fixture: ComponentFixture<EditProyecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProyecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProyecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

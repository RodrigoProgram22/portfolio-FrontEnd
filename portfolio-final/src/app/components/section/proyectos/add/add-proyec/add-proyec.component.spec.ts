import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProyecComponent } from './add-proyec.component';

describe('AddProyecComponent', () => {
  let component: AddProyecComponent;
  let fixture: ComponentFixture<AddProyecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProyecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProyecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

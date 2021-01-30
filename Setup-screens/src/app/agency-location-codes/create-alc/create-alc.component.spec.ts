import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlcComponent } from './create-alc.component';

describe('CreateAlcComponent', () => {
  let component: CreateAlcComponent;
  let fixture: ComponentFixture<CreateAlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

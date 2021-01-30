import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAlcComponent } from './manage-alc.component';

describe('ManageAlcComponent', () => {
  let component: ManageAlcComponent;
  let fixture: ComponentFixture<ManageAlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

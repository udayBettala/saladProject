import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladFormComponent } from './salad-form.component';

describe('SaladFormComponent', () => {
  let component: SaladFormComponent;
  let fixture: ComponentFixture<SaladFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

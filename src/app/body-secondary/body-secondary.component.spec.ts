import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySecondaryComponent } from './body-secondary.component';

describe('BodySecondaryComponent', () => {
  let component: BodySecondaryComponent;
  let fixture: ComponentFixture<BodySecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodySecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodySecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoidsComponent } from './poids.component';

describe('PoidsComponent', () => {
  let component: PoidsComponent;
  let fixture: ComponentFixture<PoidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

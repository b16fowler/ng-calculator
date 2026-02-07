import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invert } from './invert';

describe('Invert', () => {
  let component: Invert;
  let fixture: ComponentFixture<Invert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Invert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

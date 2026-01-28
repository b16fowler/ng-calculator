import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Clear } from './clear';

describe('Clear', () => {
  let component: Clear;
  let fixture: ComponentFixture<Clear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Clear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Clear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

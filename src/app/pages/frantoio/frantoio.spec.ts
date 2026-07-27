import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frantoio } from './frantoio';

describe('Frantoio', () => {
  let component: Frantoio;
  let fixture: ComponentFixture<Frantoio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frantoio],
    }).compileComponents();

    fixture = TestBed.createComponent(Frantoio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

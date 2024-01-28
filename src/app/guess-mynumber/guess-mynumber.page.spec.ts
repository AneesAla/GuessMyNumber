import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuessMynumberPage } from './guess-mynumber.page';

describe('GuessMynumberPage', () => {
  let component: GuessMynumberPage;
  let fixture: ComponentFixture<GuessMynumberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuessMynumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

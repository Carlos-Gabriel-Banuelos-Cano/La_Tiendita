import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbarrotesPage } from './abarrotes.page';

describe('AbarrotesPage', () => {
  let component: AbarrotesPage;
  let fixture: ComponentFixture<AbarrotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbarrotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

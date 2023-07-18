import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileToggleComponent } from './mobile-toggle.component';

describe('MobileToggleComponent', () => {
  let component: MobileToggleComponent;
  let fixture: ComponentFixture<MobileToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileToggleComponent]
    });
    fixture = TestBed.createComponent(MobileToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

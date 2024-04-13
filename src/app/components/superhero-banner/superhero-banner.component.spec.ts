import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroBannerComponent } from './superhero-banner.component';

describe('SuperheroBannerComponent', () => {
  let component: SuperheroBannerComponent;
  let fixture: ComponentFixture<SuperheroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperheroBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperheroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSideNavComponent } from './mat-side-nav.component';

describe('MatSideNavComponent', () => {
  let component: MatSideNavComponent;
  let fixture: ComponentFixture<MatSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

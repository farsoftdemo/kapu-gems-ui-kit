import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedDiamondsSearchComponent } from './certified-diamonds-search.component';

describe('CertifiedDiamondsSearchComponent', () => {
  let component: CertifiedDiamondsSearchComponent;
  let fixture: ComponentFixture<CertifiedDiamondsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertifiedDiamondsSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertifiedDiamondsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

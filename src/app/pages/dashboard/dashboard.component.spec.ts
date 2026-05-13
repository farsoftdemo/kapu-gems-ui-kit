import {
  Component,
  Input
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';

import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'apx-chart',
  standalone: true,
  template: ''
})
class MockApexChartComponent {
  @Input() series: unknown;

  @Input() chart: unknown;

  @Input() xaxis: unknown;

  @Input() stroke: unknown;

  @Input() tooltip: unknown;

  @Input() dataLabels: unknown;

  @Input() grid: unknown;

  @Input() labels: unknown;

  @Input() responsive: unknown;

  @Input() legend: unknown;
}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [provideRouter([])]
    })
    .overrideComponent(DashboardComponent, {
      remove: {
        imports: [NgApexchartsModule]
      },
      add: {
        imports: [MockApexChartComponent]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

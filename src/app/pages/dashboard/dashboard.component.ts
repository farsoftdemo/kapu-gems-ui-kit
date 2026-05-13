import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  LucideAngularModule,

  Gem,
  ShoppingBag,
  MessageSquare,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,

  Search,
  Gavel,
  HandCoins,
  Sparkles,
  Package,
  Heart

} from 'lucide-angular';

import {
  NgApexchartsModule,

  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
  ApexGrid,

  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexLegend

} from 'ng-apexcharts';

import { PremiumModalComponent } from '../../shared/components/premium-modal/premium-modal.component';

/* =========================
   LINE CHART TYPE
========================= */

export type ChartOptions = {

  series: ApexAxisChartSeries;

  chart: ApexChart;

  xaxis: ApexXAxis;

  stroke: ApexStroke;

  tooltip: ApexTooltip;

  dataLabels: ApexDataLabels;

  grid: ApexGrid;
};

/* =========================
   PIE CHART TYPE
========================= */

export type PieChartOptions = {

  series: ApexNonAxisChartSeries;

  chart: ApexChart;

  labels: string[];

  colors: string[];

  responsive: ApexResponsive[];

  legend: ApexLegend;
};

type NoticeAd = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    LucideAngularModule,
    NgApexchartsModule,
    PremiumModalComponent
  ],

  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent
  implements OnInit, OnDestroy {

  @ViewChild('diamondCarousel')
  diamondCarousel!: ElementRef;

  /* =========================
     MODAL
  ========================= */

  showWelcomeModal = true;

  /* =========================
     PAYMENT
  ========================= */

  activePaymentTab = 'india';

  /* =========================
     ICONS
  ========================= */

  readonly Gem = Gem;

  readonly ShoppingBag = ShoppingBag;

  readonly MessageSquare = MessageSquare;

  readonly ShieldCheck = ShieldCheck;

  readonly ChevronLeft = ChevronLeft;

  readonly ChevronRight = ChevronRight;

  readonly Search = Search;

readonly Gavel = Gavel;

readonly HandCoins = HandCoins;

readonly Sparkles = Sparkles;

readonly Package = Package;

readonly Heart = Heart;

showEarlyBirdMenu = false;

  activeNoticeIndex = 0;

  private noticeRotationId?: ReturnType<typeof setInterval>;

  readonly noticeAds: NoticeAd[] = [
    {
      image: 'assets/images/kapugemloginbg.png',
      eyebrow: 'PRIVATE SHOWCASE',
      title: 'Kapu Gems Signature Event',
      description:
        'An invite-only viewing of premium certified stones for selected buyers.'
    },
    {
      image: 'assets/images/diamonds/diamond-1.jpg',
      eyebrow: 'LIVE AUCTION',
      title: 'Early Bird Diamond Auction',
      description:
        'Priority bidding opens soon for high-demand round brilliant inventory.'
    },
    {
      image: 'assets/images/diamonds/diamond-3.jpg',
      eyebrow: 'NEW COLLECTION',
      title: 'Rare Shapes Preview',
      description:
        'Explore curated ovals, emeralds and fancy shapes before public release.'
    },
    {
      image: 'assets/images/diamonds/diamond-4.jpg',
      eyebrow: 'CLIENT NOTICE',
      title: 'Shipment Window Update',
      description:
        'Important delivery and customs schedule updates for active orders.'
    }
  ];

  /* =========================
     CHARTS
  ========================= */

  public chartOptions: ChartOptions;

  public pieChartOptions: PieChartOptions;

  constructor(
    private router: Router
  ) {

    /* LINE CHART */

    this.chartOptions = {

      series: [
        {
          name: 'Orders',

          data: [18, 26, 22, 31, 28, 42, 36]
        }
      ],

      chart: {
        type: 'line',

        height: 340,
        width: '100%',

        toolbar: {
          show: false
        },

        zoom: {
          enabled: false
        },

        fontFamily: 'Inter, sans-serif'
      },
     
      stroke: {
        curve: 'smooth',

        width: 3
      },

      dataLabels: {
        enabled: false
      },

      grid: {
        borderColor: '#efe4d8',

        strokeDashArray: 5
      },

      xaxis: {

        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul'
        ],

        labels: {
          style: {
            colors: '#8b8175'
          }
        },

        axisBorder: {
          show: false
        },

        axisTicks: {
          show: false
        }
      },

      tooltip: {
        theme: 'light'
      }
    };

    /* PIE */

    this.pieChartOptions = {

      series: [44, 21, 17, 18],

      chart: {
        type: 'donut',

        height: 260
      },

      labels: [
        'Round',
        'Oval',
        'Emerald',
        'Pear'
      ],

      colors: [
        '#c8a66a',
        '#dcc49b',
        '#b89257',
        '#efe3d0'
      ],

      legend: {
        position: 'bottom',

        fontSize: '12px'
      },

      responsive: [
        {
          breakpoint: 480,

          options: {
            chart: {
              width: 280
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {

    this.noticeRotationId =
      setInterval(() => {
        this.nextNotice();
      }, 4200);
  }

  ngOnDestroy(): void {

    if (this.noticeRotationId) {
      clearInterval(this.noticeRotationId);
    }
  }

  /* =========================
     MODAL
  ========================= */

  closeWelcomeModal(): void {

    this.showWelcomeModal = false;
  }

  openStockSearch(): void {

    this.router.navigate(['/stock-search']);
  }

  /* =========================
     PAYMENT TAB
  ========================= */

  setPaymentTab(tab: string): void {

    this.activePaymentTab = tab;
  }

  /* =========================
     SHORTLIST
  ========================= */

  scrollLeft(): void {

    this.diamondCarousel
      .nativeElement
      .scrollBy({
        left: -320,
        behavior: 'smooth'
      });
  }

  scrollRight(): void {

    this.diamondCarousel
      .nativeElement
      .scrollBy({
        left: 320,
        behavior: 'smooth'
      });
  }

  toggleEarlyBirdMenu(): void {

  this.showEarlyBirdMenu =
    !this.showEarlyBirdMenu;
}

  nextNotice(): void {

    this.activeNoticeIndex =
      (this.activeNoticeIndex + 1) %
      this.noticeAds.length;
  }

  previousNotice(): void {

    this.activeNoticeIndex =
      (
        this.activeNoticeIndex -
        1 +
        this.noticeAds.length
      ) %
      this.noticeAds.length;
  }

  setNotice(index: number): void {

    this.activeNoticeIndex = index;
  }

  getNoticePosition(index: number): string {

    if (index === this.activeNoticeIndex) {
      return 'active';
    }

    const previousIndex =
      (
        this.activeNoticeIndex -
        1 +
        this.noticeAds.length
      ) %
      this.noticeAds.length;

    const nextIndex =
      (this.activeNoticeIndex + 1) %
      this.noticeAds.length;

    if (index === previousIndex) {
      return 'previous';
    }

    if (index === nextIndex) {
      return 'next';
    }

    return 'hidden';
  }
}

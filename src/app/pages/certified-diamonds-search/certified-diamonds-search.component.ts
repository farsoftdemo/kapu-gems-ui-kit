import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BadgeCheck,
  ChevronDown,
  Gem,
  LucideAngularModule,
  RotateCcw,
  Save,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles
} from 'lucide-angular';

type OptionGroup =
  | 'lab'
  | 'shape'
  | 'color'
  | 'clarity'
  | 'cps'
  | 'cut'
  | 'polish'
  | 'symmetry'
  | 'fluor'
  | 'shade'
  | 'black'
  | 'white'
  | 'milky'
  | 'eyeClean'
  | 'culet'
  | 'canadamark'
  | 'ha'
  | 'typeIia'
  | 'location'
  | 'luster';

type RangeField =
  | 'weight'
  | 'price'
  | 'discount'
  | 'depth'
  | 'table'
  | 'minMM'
  | 'maxMM'
  | 'crown'
  | 'pavilion'
  | 'ratio';

type ShapeOption = {
  label: string;
  iconClass: string;
};

type OptionGroupConfig = {
  label: string;
  key: OptionGroup;
  options: string[];
};

type MeasurementFieldConfig = {
  label: string;
  key: RangeField;
};

@Component({
  selector: 'app-certified-diamonds-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule
  ],
  templateUrl: './certified-diamonds-search.component.html',
  styleUrls: ['./certified-diamonds-search.component.scss']
})
export class CertifiedDiamondsSearchComponent {
  readonly BadgeCheck = BadgeCheck;
  readonly ChevronDown = ChevronDown;
  readonly Gem = Gem;
  readonly RotateCcw = RotateCcw;
  readonly Save = Save;
  readonly Search = Search;
  readonly ShieldCheck = ShieldCheck;
  readonly SlidersHorizontal = SlidersHorizontal;
  readonly Sparkles = Sparkles;

  advancedOpen = true;
  status = 'All';
  unseenOnly = false;
  demandView = 'Search Demand';
  size = '';

  readonly ranges: Record<RangeField, { from: string; to: string }> = {
    weight: { from: '', to: '' },
    price: { from: '', to: '' },
    discount: { from: '', to: '' },
    depth: { from: '', to: '' },
    table: { from: '', to: '' },
    minMM: { from: '', to: '' },
    maxMM: { from: '', to: '' },
    crown: { from: '', to: '' },
    pavilion: { from: '', to: '' },
    ratio: { from: '', to: '' }
  };

  readonly selected: Record<OptionGroup, string[]> = {
    lab: ['GIA'],
    shape: ['Round'],
    color: ['D', 'E'],
    clarity: ['VVS1', 'VVS2'],
    cps: ['3EX'],
    cut: ['EX'],
    polish: ['EX'],
    symmetry: ['EX'],
    fluor: ['None'],
    shade: ['No BGM'],
    black: [],
    white: [],
    milky: [],
    eyeClean: [],
    culet: [],
    canadamark: [],
    ha: [],
    typeIia: [],
    location: [],
    luster: []
  };

  readonly labs = ['GIA', 'IGI', 'HRD', 'KAPU'];

  readonly shapes: ShapeOption[] = [
    { label: 'Round', iconClass: 'round' },
    { label: 'Princess', iconClass: 'princess' },
    { label: 'Cushion Mod', iconClass: 'cushion-mod' },
    { label: 'Cushion', iconClass: 'cushion' },
    { label: 'Emerald', iconClass: 'emerald' },
    { label: 'SQ Emerald', iconClass: 'sq-emerald' },
    { label: 'L-Sq Radiant', iconClass: 'radiant' },
    { label: 'Pear', iconClass: 'pear' },
    { label: 'Oval', iconClass: 'oval' },
    { label: 'Heart', iconClass: 'heart' },
    { label: 'Marquise', iconClass: 'marquise' },
    { label: 'Baguette', iconClass: 'baguette' },
    { label: 'Special', iconClass: 'special' },
    { label: 'Other', iconClass: 'other' }
  ];

  readonly colorOptions = [
    'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'N Down', 'Fancy'
  ];

  readonly clarityOptions = [
    'FL', 'IF', 'VVS1', 'VVS2', 'VS1',
    'VS2', 'SI1', 'SI2', 'SI3', 'I1 Down'
  ];

  readonly cpsOptions = ['3EX', '2EX', '3VG'];
  readonly cutOptions = ['EX', 'VG', 'GD'];
  readonly fluorOptions = ['None', 'Fnt', 'Med', 'Stg', 'V-Stg'];
  readonly shadeOptions = ['No BGM', 'BR', 'GR', 'MT'];

  readonly blackOptions = [
    'None', 'VLBC+', 'VLBC', 'LBC', 'BIC', 'MBC',
    'VLBS+', 'VLBS', 'LBS', 'BIS', 'MBS', 'VLBCS+',
    'VLBCS', 'LBCS', 'BICS', 'MBCS'
  ];

  readonly whiteOptions = [
    'None', 'VLFC+', 'VLFC', 'LFC', 'FIC', 'MFC',
    'VLFS', 'VLFS+', 'LFS', 'FIS', 'MFS', 'VLFCS+',
    'VLFCS', 'LFCS', 'FCS', 'MFCS'
  ];

  readonly milkyOptions = ['None', 'ML1', 'ML2', 'ML3', 'ML4'];
  readonly eyeCleanOptions = ['EC', 'BN', 'WN', 'BV', 'WV', 'BWN', 'BWV'];

  readonly culetOptions = [
    'None', 'Pointed', 'VSF', 'Chipped', 'Abraded',
    'VSM', 'SML', 'Natural', 'Linear', 'ELG'
  ];

  readonly canadamarkOptions = ['CM Eligible', 'Canadian Origin'];
  readonly haOptions = ['-', 'ID', 'EX', 'VG', 'GD'];

  readonly typeIiaOptions = [
    '2A Certified', '2A Eligible', '1A Certified', '1A Eligible',
    '2B Certified', '2B Eligible', '1AB Certified'
  ];

  readonly locationOptions = ['India', 'Show', 'Hong Kong', 'USA'];
  readonly lusterOptions = ['EX', 'VG', 'GD', 'FR'];

  readonly qualityGroups: OptionGroupConfig[] = [
    { label: 'CPS', key: 'cps', options: this.cpsOptions },
    { label: 'Cut', key: 'cut', options: this.cutOptions },
    { label: 'Polish', key: 'polish', options: this.cutOptions },
    { label: 'Sym', key: 'symmetry', options: this.cutOptions }
  ];

  readonly measurementFields: MeasurementFieldConfig[] = [
    { label: 'Dep%', key: 'depth' },
    { label: 'Tab%', key: 'table' },
    { label: 'MinMM', key: 'minMM' },
    { label: 'MaxMM', key: 'maxMM' },
    { label: 'Cr >', key: 'crown' },
    { label: 'Pav >', key: 'pavilion' },
    { label: 'L/W', key: 'ratio' }
  ];

  toggleSelection(group: OptionGroup, option: string): void {
    const currentSelection = this.selected[group];

    if (currentSelection.includes(option)) {
      this.selected[group] =
        currentSelection.filter(item => item !== option);
      return;
    }

    this.selected[group] = [
      ...currentSelection,
      option
    ];
  }

  isSelected(group: OptionGroup, option: string): boolean {
    return this.selected[group].includes(option);
  }

  resetSearch(): void {
    Object.keys(this.selected)
      .forEach(group => {
        this.selected[group as OptionGroup] = [];
      });

    Object.keys(this.ranges)
      .forEach(field => {
        this.ranges[field as RangeField] = {
          from: '',
          to: ''
        };
      });

    this.size = '';
    this.status = 'All';
    this.unseenOnly = false;
    this.demandView = 'Search Demand';
  }
}

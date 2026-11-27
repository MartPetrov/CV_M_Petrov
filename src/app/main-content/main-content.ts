import { Component, inject } from '@angular/core';
import { LeftColumn } from './left-column/left-column';
import { RightColumn } from './right-column/right-column';
import { CareerService } from '../career/career.service';

@Component({
  selector: 'app-main-content',
  imports: [LeftColumn, RightColumn],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {
  protected readonly careerService = inject(CareerService);
}

import { Component, inject } from '@angular/core';
import { CareerService } from '../../career/career.service';

@Component({
  selector: 'app-left-column',
  imports: [],
  templateUrl: './left-column.html',
  styleUrl: './left-column.css',
})
export class LeftColumn {
  protected readonly career = inject(CareerService).selected;
}

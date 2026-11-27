import { Component, inject } from '@angular/core';
import { CareerService } from '../../career/career.service';

@Component({
  selector: 'app-right-column',
  imports: [],
  templateUrl: './right-column.html',
  styleUrl: './right-column.css',
})
export class RightColumn {
  protected readonly career = inject(CareerService).selected;

  /** Personal info – the same for every career direction. */
  readonly sports = ['Running', 'Volleyball', 'Boxing', 'Swimming'];
}

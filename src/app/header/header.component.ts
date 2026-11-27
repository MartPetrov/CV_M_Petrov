import { Component, inject } from '@angular/core';
import { CareerService } from '../career/career.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  protected readonly career = inject(CareerService).selected;
}

import { Injectable, computed, signal } from '@angular/core';
import { CAREERS, CareerId } from './career-data';

const PARAM = 'career';

@Injectable({ providedIn: 'root' })
export class CareerService {
  readonly careers = CAREERS;

  /** Selected direction. Can be preselected with ?career=construction so a link opens the right CV. */
  readonly selectedId = signal<CareerId>(this.readFromUrl());

  readonly selected = computed(
    () => this.careers.find((c) => c.id === this.selectedId()) ?? this.careers[0],
  );

  select(id: CareerId): void {
    this.selectedId.set(id);
    const url = new URL(window.location.href);
    if (id === this.careers[0].id) {
      url.searchParams.delete(PARAM);
    } else {
      url.searchParams.set(PARAM, id);
    }
    window.history.replaceState(null, '', url);
  }

  private readFromUrl(): CareerId {
    const value = new URLSearchParams(window.location.search).get(PARAM);
    return this.careers.some((c) => c.id === value) ? (value as CareerId) : this.careers[0].id;
  }
}

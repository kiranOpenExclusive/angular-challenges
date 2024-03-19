import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForEmpty } from './ng-for-empty.directive';

interface Person {
  name: string;
}

@Component({
  standalone: true,
  imports: [NgFor, NgForEmpty, NgIf],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; empty: emptyList">
      {{ person.name }}
    </div>
    <ng-template #emptyList>The list is empty for sure!</ng-template>
    <button *ngIf="!!persons.length" (click)="clearList()">Empty list</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  persons: Person[] = [
    {
      name: 'test',
    },
    {
      name: 'test',
    },
    {
      name: 'test',
    },
    {
      name: 'test',
    },
  ];

  clearList(): void {
    this.persons = [];
  }
}

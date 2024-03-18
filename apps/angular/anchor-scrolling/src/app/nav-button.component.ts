/* eslint-disable @angular-eslint/component-selector */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

interface targetElementInterface {
  [key: string]: string;
}

const TARGET_ELEMENT_ID: targetElementInterface = {
  '#bottom': 'bottom',
  '#top': 'top',
};
@Component({
  selector: 'nav-button',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a [routerLink]="href" (click)="handleAnchorTagClick()">
      <ng-content></ng-content>
    </a>
  `,
  host: {
    class: 'block w-fit border border-red-500 rounded-md p-4 m-2',
  },
})
export class NavButtonComponent {
  @Input() href = '';
  @ViewChild('top') topElement!: ElementRef;
  @ViewChild('bottom') bottomElement!: ElementRef;

  scrollToTarget(element: HTMLElement | null): void {
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  }

  handleAnchorTagClick(): void {
    if (!this.href.startsWith('#')) {
      return;
    }

    switch (this.href) {
      case '#bottom':
        this.scrollToTarget(document.getElementById('bottom'));
        return;
      case '#top':
        this.scrollToTarget(document.getElementById('top'));
        return;
      default:
        return;
    }
  }
}

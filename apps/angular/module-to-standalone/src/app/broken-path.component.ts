import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-broken-path',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>path doesn't exist!</p>
  `,
  styles: ``,
})
export class BrokenPathComponent {}

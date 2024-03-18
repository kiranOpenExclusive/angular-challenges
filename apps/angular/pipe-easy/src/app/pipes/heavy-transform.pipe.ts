import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'heavyTransformation',
})
export class HeavyTransformationPipe implements PipeTransform {
  transform(name: string, index: number): string {
    return `${name} - ${index}`;
  }
}

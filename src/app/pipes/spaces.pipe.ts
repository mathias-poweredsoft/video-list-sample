import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaces'
})
export class SpacesPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    let result = '';
    for (let c of value)
      result += `${c} `;
    return result;
  }

}

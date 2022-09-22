import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {
  currentYear: any;
  joinYear: any;

  transform(value: any): unknown {
    this.currentYear = new Date().getFullYear();
    this.joinYear = new Date(value).getFullYear();
    return this.currentYear - this.joinYear;
  }

}

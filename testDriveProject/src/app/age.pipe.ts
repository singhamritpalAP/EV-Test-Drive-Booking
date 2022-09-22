import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  currentYear: any;
  dobYear: any;
  
  transform(value: any): any {
    this.currentYear = new Date().getFullYear();
    this.dobYear = new Date(value).getFullYear();

    return this.currentYear - this.dobYear;
  }

}

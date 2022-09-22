import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prename'
})
export class PrenamePipe implements PipeTransform {

  transform(value: any): any {
    if(value === 'M'){
      return "Mr.";
    }
    else {
      return "Miss.";
    }
  }

}

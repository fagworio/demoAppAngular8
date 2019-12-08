import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incompleted'
})
export class IncompletedPipe implements PipeTransform {

  transform(value: any): any {
    if(!value)  return []; 
      return value.filter((item) => { return !item.completed});
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floatBuild'
})
export class FloatBuildPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let floatNumber = Number(value);
    if(!Number.isNaN(floatNumber)){
      // floatNumber = Math.
    }
    return value;
  }

}

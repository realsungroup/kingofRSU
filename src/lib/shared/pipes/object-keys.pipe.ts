/**
 * name:object keys
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'objectKeys'
})

export class ObjectKeysPipe implements PipeTransform {
    transform(object) {
        let keys = []
        for(var key in object){
            keys.push(key);
        }
        return keys;
    }
}
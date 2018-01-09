import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

    //获取对象中数组合并
    getAllArrayDataForObject(obj):any[]{
        if(!obj) return [];
        let dataArr = [];
        for(var key in obj){
            const item = obj[key];
            if(Array.isArray(item)) dataArr = dataArr.concat(item);
        }
        return dataArr;
    }
}
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
@Component({
  selector: 'app-rsu-my-detail',
  templateUrl: './rsu-my-detail.component.html',
  styleUrls: ['./rsu-my-detail.component.scss']
})
export class RsuMyDetailComponent implements OnInit {
  _dataLoading:boolean = false;
  _titleArr: any[] = [];
  _data: any[] = [];
  copyData = [];
  filterArrayMap = {};
  filterColArrA=[];
  sortColArrA=[];
  moneyProportion = null;
  sumColArr: any[] = [];
  constructor(private httpSev:BaseHttpService,private messSev:NzMessageService) { }
  sortMap = {};
  yearName = [];
  ngOnInit() {
    this.filterColArrA=['C3_567701444098','C3_567604448453','C3_567604448453'];
    this.sortColArrA=['C3_567604321733','C3_567604336405','C3_567604353999','C3_567604370515','C3_567604393810','C3_567604478172','C3_567604500064','C3_567604517813','C3_567604527905',
   'C3_567604539485','C3_567604551986','C3_567604566564','C3_567604578221','C3_567604595533','C3_567604615252','C3_567604642362']

 this.sumColArr=['C3_567604527905','C3_567604551986','C3_567604566564','C3_567604578221','C3_567604595533','C3_567604615252','C3_567604642362']
   let path = this.httpSev.path;
    let url = path.baseUrl + path.getData;
    let params = {
      resid: 567704019233,
      getcolumninfo: 1
    }
    this._dataLoading = true;
    this.httpSev.baseRequest("GET", url, params, this.httpSev.dataT.HostTableDataEM).subscribe(
      data => {
        this._dataLoading = false;
        if (data && data['data'] && Array.isArray(data['data'])) {
          this._titleArr = data['cmscolumninfo'];
          this._data = data['data'];
          this.copyData = [...this._data];

          // this.filterColArrA.forEach(col => {
          //   this.filterArrayMap[col] = this.getFilterArrData(this.copyData, col);
          // })

        }
      },
      error => {
        this._dataLoading = false;
        this.messSev.error(error);
      }
    )
    const moneyUrl = path.baseUrl + path.getData;
    const moneyParams = {
      resid: 561571034816
    }
    this.httpSev.baseRequest("GET", moneyUrl, moneyParams, this.httpSev.dataT.HostTableDataEM).subscribe(
      data => {
        if (data && data['data'] && Array.isArray(data['data']) && data['data'][0]) {
            this.moneyProportion = data['data'][0]['C3_561550600104'];
        }
      },
      error => {
        
      }
    )  
    const yearUrl = path.baseUrl + path.getData;
    const yearParams = {
      resid: 561571034816
    }
    this.httpSev.baseRequest("GET", yearUrl, yearParams, this.httpSev.dataT.HostTableDataEM).subscribe(
      data => {
        if (data && data['data'] && Array.isArray(data['data'])) {
          let yearDetailName = [];
          data['data'].forEach(item => {
            yearDetailName.push(item.C3_561550586204)
          })
          this.yearName = yearDetailName;
        }

      }, error => { }
    )
   
  }
  // getFilterArrData(data: any, key: string): Array<any> {
  //   let dataMap = {};
  //   for (var value of data) {
  //     let obj = {
  //       name: value[key],
  //       value: false
  //     };
  //     dataMap[obj.name] = obj;
  //   }
  //   return Object.values(dataMap);
  // }
  getColSum(key: string): string {
    let sum = 0;
    this._data.forEach(item => {
      sum = Number(item[key])  + sum ;
    })
    // sum = sum.toFixed(2);
    return sum.toFixed(2);
  }
}

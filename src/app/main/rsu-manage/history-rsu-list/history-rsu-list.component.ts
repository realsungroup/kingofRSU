import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-history-rsu-list',
  templateUrl: './history-rsu-list.component.html',
  styleUrls: ['./history-rsu-list.component.scss']
})
export class HistoryRsuListComponent implements OnInit {
  url: string = "";
  requestDataType: number = -1;
  requestParams: any = {};
  filterColArr = [];
  sortColArr = [];
  sumColArr: any[] = [];
  isDetailShow = false;
  operationButton = [{ title: '个人账户交易记录', type: 'default' }];
  filterColArrA = [];
  sortColArrA = [];
  _titleArr: any[] = [];
  moneyProportion = null;
  _dataLoading: boolean = false;
  _data: any[] = [];
  yearName = [];
  yearData: any[] = [];
  itemA: any = {}

  constructor(private httpSev: BaseHttpService, private router: Router, private messSev: NzMessageService) { }

  ngOnInit() {
    this.filterColArr = [];
    this.sortColArr = ['C3_567713575122', 'C3_567713585746', 'C3_567713610192', 'C3_567768611434', 'C3_567768619234', 'C3_567768625786', 'C3_567768640139', 'C3_568494071664', 'C3_568494119088', 'C3_568494135983', 'C3_568494153455', 'C3_568494239038', 'C3_568494257992', 'C3_568494271658']
    this.filterColArrA = ['C3_567701444098', 'C3_567604448453', 'C3_567604448453'];
    this.sortColArrA = ['C3_567604321733', 'C3_567604336405', 'C3_567604353999', 'C3_567604370515', 'C3_567604393810', 'C3_567604478172', 'C3_567604500064', 'C3_567604517813', 'C3_567604527905',
      'C3_567604539485', 'C3_567604551986', 'C3_567604566564', 'C3_567604578221', 'C3_567604595533', 'C3_567604615252', 'C3_567604642362']

    this.sumColArr = ['C3_567604527905', 'C3_567604551986', 'C3_567604566564', 'C3_567604578221', 'C3_567604595533', 'C3_567604615252', 'C3_567604642362']
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;

    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    this.requestParams = {
      resid: 568464091538,
      pageIndex: 0,
      pageSize: 2000,
      getcolumninfo: 1
    }
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



  operationBtnNoti(e) {

    this.isDetailShow = true;
    let path = this.httpSev.path;
    let url = path.baseUrl + path.getSubData;
    let item = e.data;
    this.itemA = e.data;
    let params: any = {
      "resid": 568464091538,//id
      "subresid": 568398863279,
      "hostrecid": item.REC_ID,
      "getcolumninfo": 1
    }
    this._dataLoading = true;
    this.httpSev.baseRequest("GET", url, params, this.httpSev.dataT.AttachTableDataEM).subscribe(
      data => {
        this._dataLoading = false;
        if (data && data['data'] && Array.isArray(data['data'])) {
          this._titleArr = data['cmscolumninfo'];
          this._data = data['data'];
          // this.copyData = [...this._data];

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

  }
  getColSum(key: string): string {
    let sum = 0;
    this._data.forEach(item => {
      sum = Number(item[key]) + sum;
    })
    // sum = sum.toFixed(2);
    return sum.toFixed(2);
  }

  Goback() { this.isDetailShow = false; }
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
  refreshData(e) {
    let path = this.httpSev.path;
    let cmswhere = '';

    let url = path.baseUrl + path.getSubData;
    let params = {
      "resid": 568464091538,
      "hostrecid": this.itemA.REC_ID,
      "subresid": 568398863279,
      "getcolumninfo": 1,
      "cmswhere": 'C3_567701444098' + " = " + "'" +e +"'"
    }

    this.httpSev.baseRequest("GET", url, params, this.httpSev.dataT.AttachTableDataEM).subscribe(
      data => {

        if (data && data['data'] && Array.isArray(data['data'])) {
          this._titleArr = data['cmscolumninfo'];
          this._data = data['data'];

        }
      },
      error => {
        this._dataLoading = false;
        this.messSev.error(error);
      }
    )
  }
}

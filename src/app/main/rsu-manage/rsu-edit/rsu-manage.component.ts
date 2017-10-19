import { Component, OnInit,Injector } from '@angular/core';
// import { BaseHttpService } from '@app/base-http-service/base-http.service';
// import { BaseComponent } from '@app/base-component/base.component';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import { BaseComponent } from '../../../base-component/base.component';
import { NzMessageService } from 'ng-zorro-antd';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rsu-manage',
  templateUrl: './rsu-manage.component.html',
  styleUrls: ['./rsu-manage.component.scss']
})
export class RsuManageComponent extends BaseComponent implements OnInit {

  _submitLoading:boolean = false;
  _dataLoading:boolean = false;
  _data: any[] = [];
  _titleArr: any[] = [];

  moneyProportion = null;
 
  sumColArr: any[] = [];
  filterColArr = [];
  sortColArr = [];

  filterClassArray = [];
  filterClassSecondArray = [];

  filterArrayMap = {}

  sortMap = {};
  sortName = null;
  sortValue = null;
  copyData = [];

  ngOnInit() {

    this.filterColArr = ['C3_561545942716', 'C3_561545942872', 'C3_561545943044', 'C3_561550147088', 'C3_561550169926', 'C3_561550192001'];
    this.sortColArr = ['C3_561545941733','C3_561545941905', 'C3_561549939294','C3_561549942585','C3_561550223794','C3_561550234465',	'C3_561550460169',	'C3_561550653754']
    this.sortColArr.forEach(col => {
      this.sortMap[col] = null
    });
    this.sumColArr = ['C3_561550223794', 'C3_561550234465', 'C3_561550460169', 'C3_561550653754'];

    let path = this._http.path;
    const moneyUrl = path.baseUrl + path.getData;
    const moneyParams = {
      resid: 561571034816
    }
    this._http.baseRequest("GET", moneyUrl, moneyParams, this._http.dataT.HostTableDataEM).subscribe(
      data => {
        if (data && data['data'] && Array.isArray(data['data']) && data['data'][0]) {
            this.moneyProportion = data['data'][0]['C3_561550600104'];
        }
      },
      error => {
        
      }
    )

    let url = path.loginBaseUrl + path.getData;
    let params = {
      resid: 561553433582,
      getcolumninfo: 1
    }
    this._dataLoading = true;
    this._http.baseRequest("GET", url, params, this._http.dataT.HostTableDataEM).subscribe(
      data => {
        this._dataLoading = false;
        if (data && data['data'] && Array.isArray(data['data'])) {
          this._titleArr = data['cmscolumninfo'];
          this._data = data['data'];
          this.copyData = [...this._data];

          this.filterColArr.forEach(col => {
            this.filterArrayMap[col] = this.getFilterArrData(this.copyData, col);
          })

        }
      },
      error => {
        this._dataLoading = false;
        this.messSev.error(error);
      }
    )
  }

  sort(sortName, value) {
    this.sortName = sortName;
    this.sortValue = value;
    Object.keys(this.sortMap).forEach(key => {
      if (key !== sortName) {
        this.sortMap[key] = null;
      } else {
        this.sortMap[key] = value;
      }
    });
    this.search();
  }

  search() {
    let filterFunc = (item) => {
      let bool = false;
      for (var i = 0; i < this.filterColArr.length; i++) {
        let col = this.filterColArr[i];
        let searchName = this.filterArrayMap[col].filter(name => name.value);
        let itemBool = (searchName.length ? searchName.some(name => (item[col] + '').indexOf(name.name) !== -1) : true)
        if (!i) bool = itemBool;
        else bool = bool && itemBool;
      }
      return bool;
    };

    this._data = [...this.copyData.filter(item => filterFunc(item))];
    this._data = [...this._data.sort((a, b) => {
      if (a[this.sortName] > b[this.sortName]) {
        return (this.sortValue === 'ascend') ? 1 : -1;
      } else if (a[this.sortName] < b[this.sortName]) {
        return (this.sortValue === 'ascend') ? -1 : 1;
      } else {
        return 0;
      }
    })];
  }

  reset(array) {
    array.forEach(item => {
      item.value = false;
    });
    this.search();
  }

  constructor(protected _http: BaseHttpService, protected injector:Injector,private messSev:NzMessageService) {
    super(injector);
   }

  getFilterArrData(data: any, key: string): Array<any> {
    let dataMap = {};
    for (var value of data) {
      let obj = {
        name: value[key],
        value: false
      };
      dataMap[obj.name] = obj;
    }
    return Object.values(dataMap);
  }

  getColSum(key: string): string {
    let sum = 0;
    this._data.forEach(item => {
      sum = Number(item[key])  + sum ;
    })
    // sum = sum.toFixed(2);
    return sum.toFixed(2);
  }

  getColSumMoney(key: string): string {
    let sum = this.getColSum(key);
    let sumMoney = Number(sum) * Number(this.moneyProportion) ;
    sumMoney = sumMoney ;
    // return sumMoney.toString();
    return sumMoney.toFixed(2);
  }

  getDiffMoney() :string {
    let diffNum = Number(this.getColSumMoney('C3_561550460169')) - Number(this.getColSum('C3_561550653754'));
    return diffNum.toFixed(2);
  }

  submitClick(){
    let path = this._http.path;
    let url = path.baseUrl + path.saveData;
    let submitData = [];
    for(var i = 0 ; i < this.copyData.length ; i ++){
      let item = this.copyData[i];
      submitData.push({
        C3_561550460169:item['C3_561550460169'],
        REC_ID:item['REC_ID']
      })
    }
    let params = {
      resid: 561553433582,
      data: submitData,
      // withoutdata:1,
      // formulalayer:0
    }
    
    this._submitLoading = true;
    this._http.baseRequest("POST", url, params, this._http.dataT.FixMoreDataEM).subscribe(
      data => {
        this._submitLoading = false;
        if (data && data.error == 0) {
          this.messSev.success('提交成功');
        }else{
          this.messSev.error('提交失败');
        }
      },
      error => {
        this._submitLoading = false;
        this.messSev.success('提交错误');
      }
    )
  }
}

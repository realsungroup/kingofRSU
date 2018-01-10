import { Component, OnInit, Injector } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service'
import { RsuManageComponent } from '../rsu-edit/rsu-manage.component';
import { NzMessageService } from 'ng-zorro-antd';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-rsu-pend',
  templateUrl: './rsu-pend.component.html',
  styleUrls: ['./rsu-pend.component.scss']
})
export class RsuPendComponent extends RsuManageComponent implements OnInit {

  ngOnInit() {
    this.filterColArr = ['C3_561545942716', 'C3_561545942872', 'C3_561545943044', 'C3_561550147088', 'C3_561550169926', 'C3_561550192001'];
    this.sortColArr = ['C3_561545941733', 'C3_561545941905', 'C3_561549939294', 'C3_561549942585', 'C3_561545942716', 'C3_561545942872', 'C3_561545943044',
      'C3_561545943402', 'C3_561546082510', 'C3_561546131090', 'C3_561545940860', 'C3_561550147088', 'C3_561550169926', 'C3_561550192001',
      'C3_561550223794', 'C3_561550234465', 'C3_561550460169', 'C3_561550653754', 'C3_561552661912', 'C3_561571697273']
    this.sortColArr.forEach(col => {
      this.sortMap[col] = null
    });
    this.sumColArr = ['C3_561550223794', 'C3_561550234465', 'C3_561550460169', 'C3_561550653754', 'C3_561571697273'];

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

    let url = path.baseUrl + path.getData;
    let params = {
      resid: 561571827662,
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
        } else {
          this.messageSev.error('获取数据失败')
        }
      },
      error => {
        this._dataLoading = false;
        this.messageSev.error('获取数据错误' + JSON.stringify(error));
      }
    )
  }


  constructor(protected _http: BaseHttpService, protected injector: Injector, protected messageSev: NzMessageService) {
    super(_http, injector, messageSev);
  }



  submitClick() {
    let path = this._http.path;
    let url = path.baseUrl + path.saveData;
    let submitData = [];
    for (var i = 0; i < this.copyData.length; i++) {
      let item = this.copyData[i];
      submitData.push({
        C3_561571783309: 'Y',
        REC_ID: item['REC_ID']
      })
    }
    // if(!environment.production) submitData = [submitData[0]];
    let params = {
      resid: 561571827662,
      data: submitData,
      withoutdata: 1,
      formulalayer: 0
    }
    this._submitLoading = true;
    this._http.baseRequest("POST", url, params, this._http.dataT.FixMoreDataEM).subscribe(
      data => {
        if (data && data.error == 0) {
          this.messageSev.success('提交成功');
        } else {
          this.messageSev.error('提交失败');
        }
        this._submitLoading = false;
      },
      error => {
        this._submitLoading = false;
        this.messageSev.success('提交错误');
      }
    )
  }

  getDiffMoney() {
    let diffNum = Number(this.getColSumMoney('C3_561550223794')) - Number(this.getColSum('C3_561571697273'));
    return diffNum.toFixed(2);
  }

}

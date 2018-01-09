import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
import {LZcommonTableComponent} from'../../../../lib/lzTableComponent/commonTable/lzcommon-table.component'
@Component({
  selector: 'app-rsu-new-employ',
  templateUrl: './rsu-new-employ.component.html',
  styleUrls: ['./rsu-new-employ.component.scss']
})
export class RsuNewEmployComponent implements OnInit,AfterViewInit{
urlA:string='';
urlB:string='';
requestDataType: number = -1;
requestParamsA: any = {};
filterColArr = [];
sortColArr= [];
requestParamsB: any = {};
tabs=[];
addFormName="default";
operationButton = [{ title: '同意', type: 'default' }, { title: '拒绝', type: 'default' }];
@ViewChild("NeverSureTable")
private NeverSureTableRef: LZcommonTableComponent;
@ViewChild("OversureTable")
private OversureTableRef: LZcommonTableComponent;
  constructor(private httpSev:BaseHttpService,private messageSev:NzMessageService) { }

  ngOnInit() {
    this.filterColArr=['C3_567610190108','C3_567610190342','C3_567610190561','C3_567533562210','C3_567533575497','C3_567530918620'];
    this.sortColArr=['C3_567609713134','C3_567609721712','C3_567530716229','C3_567530774030','C3_567530865034','C3_567530877901','C3_567530905985','C3_567531019707','C3_567531356413','C3_567531390107','C3_567531406435'];
   this.tabs=[{
    "isSubForm": false,
    "formName": "default"
}]
    let path = this.httpSev.path;
    this.urlA = path.baseUrl + path.getData;
    this.urlB=path.baseUrl +path.getData;
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    this.requestParamsA = {
      resid: 567610244780,
      pageIndex: 0,
      pageSize: 2000,
      getcolumninfo: 1
    }
    this.requestParamsB = {
      resid: 567610262984,
      pageIndex: 0,
      pageSize: 2000,
      getcolumninfo: 1
    }
  }
  ngAfterViewInit(){}
  operationBtnNoti(e){
if(e.i == 0){
  e.data.C3_567610020435 = 'Y'
  let url = this.httpSev.path.baseUrl + this.httpSev.path.saveData;
  let param = {
    resid: 567529924492,
    data: e.data,
  }
  this.httpSev.baseRequest('POST', url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
    console.info("data",data);
    if(data && (data.error == 0 || data.Error == 0)){
        this.NeverSureTableRef._refreshData();
       this.OversureTableRef._refreshData();
       
    }else{
      this.messageSev.error(data.message || '操作失败');
    }
  })


}
else {
  e.data.C3_567610020435 = 'N'
  let url = this.httpSev.path.baseUrl + this.httpSev.path.saveData;
  let param = {
    resid: 567529924492,
    data: e.data,
  }
  this.httpSev.baseRequest('POST', url, param, this.httpSev.dataT.FixOneDataEM).subscribe(data => {
    console.info("data",data);
   if(data &&(data.error ==0|| data.Error==0)){
        this.NeverSureTableRef._refreshData();
       

   }else{
     this.messageSev.error(data.message||'操作失败');
   }


  })


}


  }

}

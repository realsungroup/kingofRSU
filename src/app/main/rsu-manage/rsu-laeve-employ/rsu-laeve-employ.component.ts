import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
@Component({
  selector: 'app-rsu-laeve-employ',
  templateUrl: './rsu-laeve-employ.component.html',
  styleUrls: ['./rsu-laeve-employ.component.scss']
})
export class RsuLaeveEmployComponent implements OnInit {
_titleArr:any[]=[];
filterColArrA=[];
sortColArrA=[];
sumColArr: any[] = [];
_data: any[] = [];
_dataLoading:boolean=false;
  constructor(private httpSev:BaseHttpService,private messSev:NzMessageService) { }

  ngOnInit() {
    this.filterColArrA=['C3_567701444098','C3_567604448453','C3_567604448453'];
    this.sortColArrA=['C3_567604321733','C3_567604336405','C3_567604353999','C3_567604370515','C3_567604393810','C3_567604478172','C3_567604500064','C3_567604517813','C3_567604527905',
   'C3_567604539485','C3_567604551986','C3_567604566564','C3_567604578221','C3_567604595533','C3_567604615252','C3_567604642362']

   this.sumColArr=['C3_567604527905','C3_567604551986','C3_567604566564','C3_567604578221','C3_567604595533','C3_567604615252','C3_567604642362']
 let path=this.httpSev.path;
 let url = path.baseUrl + path.getData;
 let params = {
   resid: 568479877837,
   getcolumninfo: 1
 }
 this._dataLoading = true;
 this.httpSev.baseRequest("GET",url,params,this.httpSev.dataT.HostTableDataEM).subscribe(data=>{
   if(data && data['data']&& Array.isArray(data['data'])){
    this._dataLoading = false;
     this._titleArr=data['cmscolumninfo'];
      this._data=data['data'];
   }
 },
error=>{
  this._dataLoading=false;
  this.messSev.error(error);
})



  }
getCol(key:string):string{
  let num=0;
  this._data.forEach(item=>{
    num=Number(item[key])+num
  })
return num.toFixed(2)
}
}

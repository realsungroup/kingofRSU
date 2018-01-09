import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { BaseHttpService } from '../../../base-http-service/base-http.service';
@Component({
  selector: 'app-rsu-account-list',
  templateUrl: './rsu-account-list.component.html',
  styleUrls: ['./rsu-account-list.component.scss']
})
export class RsuAccountListComponent implements OnInit {
  url:string="";
  requestDataType: number = -1;
  requestParams: any = {};
  filterColArr = [];
  sortColArr= [];
  constructor(private httpSev:BaseHttpService) { }

  ngOnInit() {
    this.filterColArr=[]
    this.sortColArr=['C3_567713575122','C3_567713585746','C3_567713610192','C3_567768611434','C3_567768619234','C3_567768625786','C3_567768640139']
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
    this.requestParams = {
      resid: 568495398959,
      pageIndex: 0,
      pageSize: 2000,
      getcolumninfo: 1
    }
  }

}

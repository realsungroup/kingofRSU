import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service'

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  url: string = '';
  requestParams: any = {};
  requestDataType: number = -1;
  filterColArr = [];
  sortColArr = [];

  constructor(private httpSev:BaseHttpService) { }

  ngOnInit() {
    this.filterColArr = ['C3_561545942716', 'C3_561545942872', 'C3_561545943044', 'C3_561550147088', 'C3_561550169926', 'C3_561550192001'];
    this.sortColArr = ['C3_561545941733','C3_561545941905', 'C3_561549939294','C3_561549942585','C3_561550223794','C3_561550234465',	'C3_561550460169',	'C3_561550653754']

    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    this.requestParams = {
      resid: 561571598834,
      pageIndex: 0,
      pageSize: 2000,
      getcolumninfo: 1
    }
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
  }

}

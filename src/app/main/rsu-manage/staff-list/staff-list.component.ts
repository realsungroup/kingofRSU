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

  constructor(private httpSev:BaseHttpService) { }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    this.requestParams = {
      resid: 561571598834,
      pageIndex: 0,
      pageSize: 10,
      getcolumninfo: 1
    }
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
  }

}

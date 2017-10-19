import { Component, OnInit, ElementRef } from '@angular/core';
import { BaseHttpService } from '../../../base-http-service/base-http.service'

@Component({
  selector: 'app-staff-list-export',
  templateUrl: './staff-list-export.component.html',
  styleUrls: ['./staff-list-export.component.scss']
})
export class StaffListExportComponent implements OnInit {

  url: string = '';
  requestParams: any = {};
  requestDataType: number = -1;
  navitveEle:any;

  constructor(private httpSev:BaseHttpService,private elementRef:ElementRef) { 
    this.navitveEle = elementRef.nativeElement;
  }

  ngOnInit() {
    let path = this.httpSev.path;
    this.url = path.baseUrl + path.getData;
    this.requestParams = {
      resid: 561572171961,
      pageIndex: 0,
      pageSize: 2000,
      getcolumninfo: 1
    }
    this.requestDataType = this.httpSev.dataT.HostTableDataEM;
  }

}

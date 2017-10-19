import { Component, OnInit, ElementRef, Injector } from '@angular/core';
import { MainService } from '../main/main.service';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { LZUntilService } from '../../lib/lzTableComponent/until/until.service';

@Component({
  selector: 'app-base',
  template: ''
})
export class BaseComponent implements OnInit {

  mainSev:MainService;
  appSev:AppService;
  router:Router;
  utSev:LZUntilService;
  el:ElementRef;

  dateChangeStr:string = '';
  startDateString = '';
  endDateString = "";
  _selectStartDate = null;
  _selectEndDate = null;
  _selectDateCmswhere: string = '';

  constructor(protected injector: Injector) {
    this.mainSev = injector.get(MainService);
    this.appSev = injector.get(AppService);
    this.router = injector.get(Router);
    this.utSev = injector.get(LZUntilService);
    this.el = injector.get(ElementRef);
  }

  ngOnInit() {
    this.mainSev.setBreadDataWithUrl(window.app["routesArr"], this.router.url);
  }

  dateChange(event, index) {
    if (!index) this.startDateString = this.utSev.transformDateToString(event, "yyyyMMdd") || '';
    else this.endDateString = this.utSev.transformDateToString(event, "yyyyMMdd") || '';

    if (this.startDateString.length && this.endDateString.length) this._selectDateCmswhere = this.dateChangeStr + " >='" + this.startDateString + "' AND "+ this.dateChangeStr +" <='" + this.endDateString + "'";
    else this._selectDateCmswhere = "";
  }
}

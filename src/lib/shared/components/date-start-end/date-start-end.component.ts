import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LZUntilService } from '../../services/until/until.service';

@Component({
  selector: 'date-start-end',
  templateUrl: './date-start-end.component.html',
  styleUrls: ['./date-start-end.component.scss']
})
export class DateStartEndComponent implements OnInit {

  @Input() field: string = '';
  @Output() emitterDateCmswhere = new EventEmitter();
  _dateCmswhere = '';
  _startDateString = '';
  _endDateString = '';
  _startDate = null;
  _endDate = null;

  constructor(private utilSer: LZUntilService) { }

  ngOnInit() {
  }

  dateChange(event, index) {
    if (!index) this._startDateString = this.utilSer.transformDateToString(event, "yyyyMMdd") || '';
    else this._endDateString = this.utilSer.transformDateToString(event, "yyyyMMdd") || '';

    if (this._startDateString.length && this._endDateString.length) {
      this._dateCmswhere = this.field + " >='" + this._startDateString + "' AND " + this.field + " <='" + this._endDateString + "'";
      let dateArray = this.getDateArray(this._startDateString, this._endDateString);
      this.emitterDateCmswhere.emit({
        dateCmswhere: this._dateCmswhere,
        dateArray: dateArray[0],
        orginDateArray:dateArray[1]
      })
    }
  }

  getDateArray(startDate, endDate): any[] {
    if (startDate.length < 8 || endDate.length < 8) {
      console.error("日期格式错误");
      return [[],[]];
    }
    startDate = Number(startDate);
    endDate = Number(endDate);
    if (endDate < startDate) {
      if (window.debug) console.error("结束时间小于开始时间");
      return [[],[]];
    }

    startDate = String(startDate);
    endDate = String(endDate);

    let orginDateArray = [startDate];
    let firstDate = startDate.substring(4, 6) + '/' + startDate.substring(6, 8);
    let dateArray = [firstDate];

    while (startDate < endDate) {
      var curYear = startDate.substring(0, 4);
      var curMonth = parseInt(startDate.substring(4, 6)) - 1;
      var curDay = parseInt(startDate.substring(6, 8));

      let date = new Date(curYear, curMonth, curDay);
      date.setDate(date.getDate() + 1);
      startDate = this.utilSer.transformDateToString(date, "yyyyMMdd");
      dateArray.push(this.utilSer.transformDateToString(date, "MM/dd"));
      orginDateArray.push(startDate);
    }
    return [dateArray,orginDateArray];
  }

}

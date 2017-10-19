import { Directive, HostListener, Input ,ElementRef } from '@angular/core';
declare var XLSX: any;
declare var saveAs: any;

@Directive({
  selector: '[export-xlsx]'
})
export class ExportXlsxDirective {

  @Input('export-name') fileName;
  @Input('export-el') navtiveEle;
  @Input('export-select') selectStr;

  constructor() { }

  @HostListener('click') _click() {
    var wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };
    var worksheet = XLSX.utils.table_to_book(this.navtiveEle.querySelector(this.selectStr));
    var wbout = XLSX.write(worksheet, wopts);

    function s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
      return buf;
    }

    saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), this.fileName + ".xlsx");
  }

}

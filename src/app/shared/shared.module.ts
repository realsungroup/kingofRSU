import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadFileDirective } from './directive/download-file.directive';
import { ExportXlsxDirective } from './directive/export-xlsx.directive';
import { BreadUrlDirective } from './directive/bread-url.directive';

const SHARE_DIRECTIVE_ARR = [
  DownloadFileDirective,
  ExportXlsxDirective,
  BreadUrlDirective
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...SHARE_DIRECTIVE_ARR],
  exports: [...SHARE_DIRECTIVE_ARR]
})
export class SharedModule { }

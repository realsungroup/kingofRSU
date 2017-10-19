import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LzcommonTableModule } from '../../lib/lzTableComponent/commonTable/lzcommon-table.module';

import { ClearCacheComponent } from '../main/cache/clear-cache/clear-cache.component';

import { MainService } from './main.service';
import { RsuManageModule } from './rsu-manage/rsu-manage.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    LzcommonTableModule,
    FormsModule,
    RsuManageModule
  ],
  declarations: [
    MainComponent,
    ClearCacheComponent
  ],
  entryComponents: [
  ],
  providers: [
    MainService
  ]
})

export class MainModule { };

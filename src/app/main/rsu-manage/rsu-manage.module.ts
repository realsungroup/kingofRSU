import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LzcommonTableModule } from '../../../lib/lzTableComponent/commonTable/lzcommon-table.module';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffListExportComponent } from './staff-list-export/staff-list-export.component';
import { TeamEditComponent } from './team-edit/team-edit.component';
import { RsuManageComponent } from './rsu-edit/rsu-manage.component';
import { RsuPendComponent } from './rsu-pend/rsu-pend.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LzcommonTableModule,
    SharedModule
  ],
  declarations: [StaffListComponent, StaffListExportComponent, TeamEditComponent,RsuManageComponent, RsuPendComponent]
})
export class RsuManageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,Route } from '@angular/router';

import { MainComponent } from '../main/main.component';
import { LoginComponent } from '../main/login/login.component';

import { ClearCacheComponent } from '../main/cache/clear-cache/clear-cache.component';

import { RsuManageComponent } from '../main/rsu-manage/rsu-edit/rsu-manage.component';
import { StaffListComponent } from '../main/rsu-manage/staff-list/staff-list.component';
import { StaffListExportComponent } from '../main/rsu-manage/staff-list-export/staff-list-export.component';
import { TeamEditComponent } from '../main/rsu-manage/team-edit/team-edit.component';
import { RsuPendComponent } from '../main/rsu-manage/rsu-pend/rsu-pend.component';
import {RsuNewEmployComponent  } from '../main/rsu-manage/rsu-new-employ/rsu-new-employ.component';
import { RsuMyDetailComponent} from '../main/rsu-manage/rsu-my-detail/rsu-my-detail.component';
import{ RsuLaeveEmployComponent} from'../main/rsu-manage/rsu-laeve-employ/rsu-laeve-employ.component';
import{HistoryRsuListComponent} from'../main/rsu-manage/history-rsu-list/history-rsu-list.component';

const childRouts:Array<any> = [
  // { path: '', redirectTo: 'rsu', pathMatch: 'full'},
  { path: 'clearCache',component:ClearCacheComponent,link:'/main/clearCache'},
  { path: 'rsu',component:RsuManageComponent,link:'/main/rsu'},
  { path: 'staffList',component:StaffListComponent,link:'/main/staffList'},
  { path: 'staffListExport',component:StaffListExportComponent,link:'/main/staffListExport'},
  { path: 'teamEdit',component:TeamEditComponent,link:'/main/teamEdit'},
  { path: 'rsuPend',component:RsuPendComponent,link:'/main/rsuPend'},
  {path: 'newEmploy',component:RsuNewEmployComponent,link:'/main/newEmploy'},
  {path:'myDetail',component: RsuMyDetailComponent,link:'/main/myDetail'},
  {path:'leaveEmploy',component:RsuLaeveEmployComponent,link:'/main/leaveEmploy'},
  {path:'HistoryRsuList',component:HistoryRsuListComponent,link:'/main/HistoryRsuList'},

]

const routes: Array<any> = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent ,link:"/login"},
  { path: 'main', component: MainComponent ,children:childRouts,link:"/main"}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule {}

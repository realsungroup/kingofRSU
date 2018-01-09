import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTreeModule } from 'ng-tree-antd';
// import { GoodsModule } from '../../../app/extend-table/goods.module';

import { LZcommonTableComponent } from './lzcommon-table.component';
import { WindowModalFormReadonlyComponent } from '../window-modal/modal-form-readonly/modal-form-readonly.component';
import { ModalFormComponent } from '../window-modal/modal-form/modal-form.component';
import { FormItemDynamicComponent } from '../component/form-item-dynamic/form-item-dynamic.component';
import { FormItemDynamicPComponent } from '../component/form-item-dynamic-p/form-item-dynamic-p.component';
import { AddFormDataComponent } from '../window-modal/add-form-data/add-form-data.component';
import { FormTitleDynamicComponent } from '../component/form-title-dynamic/form-title-dynamic.component';
import { CommonCardComponent } from '../extendTable/common-card/common-card.component';
import { CommonTreeComponent } from '../component/common-tree/common-tree.component';
import { TableFilterComponent } from '../component/table-filter/table-filter.component';
import { WebCameraComponent } from '../component/web-camera/web-camera.component';
import { CommonLocalDataComponent } from '../extendTable/common-local-data/common-local-data.component';
import { TableTheadComponent } from '../component/tableComponent/tableThead/table-thead';
import { TableTbodyComponent } from '../component/tableComponent/tableTbody/table-tbody';

import { MergePipe } from '../pipe/merge.pipe';
import { RepeatLoadOverDirective } from '../directive/repeat-load-over.directive';

import { LZUntilService } from '../../shared/services/until/until.service';
import { FormService } from '../service/form.service';
import { SharedModule } from '../../shared/shared.module';

const DIRECTIVES = [
  TableFilterComponent,
  CommonTreeComponent,
  CommonCardComponent,
  WebCameraComponent,
  CommonLocalDataComponent,
  TableTheadComponent,
  TableTbodyComponent
]

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzTreeModule,
    SharedModule
  ],
  declarations: [
    LZcommonTableComponent,
    WindowModalFormReadonlyComponent,
    ModalFormComponent,
    FormItemDynamicComponent,
    MergePipe,
    FormItemDynamicPComponent,
    AddFormDataComponent,
    FormTitleDynamicComponent,
    RepeatLoadOverDirective, ...DIRECTIVES],
  providers: [LZUntilService,FormService],
  exports: [LZcommonTableComponent,
    WindowModalFormReadonlyComponent,
    ModalFormComponent,
    FormItemDynamicComponent,
    FormItemDynamicPComponent,
    AddFormDataComponent,
    FormTitleDynamicComponent
    , ...DIRECTIVES]
})
export class LzcommonTableModule { }

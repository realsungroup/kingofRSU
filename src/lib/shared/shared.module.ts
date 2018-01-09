import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateStartEndComponent } from './components/date-start-end/date-start-end.component';
import { LzModalFrameComponent } from './components/lz-modal-frame/lz-modal-frame.component';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { AlertModalDirective } from './directives/alert-modal.directive';
import { AdvDictionarySearchComponent } from './components/adv-dictionary-search/adv-dictionary-search.component';
import { FormItemResourceComponent } from './components/form-item-resource/form-item-resource.component';

const components = [
    DateStartEndComponent,
    LzModalFrameComponent,
    AdvDictionarySearchComponent,
    FormItemResourceComponent
]

const pipes = [
    ObjectKeysPipe
]

const directives = [
    AlertModalDirective
]

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [...components,...pipes,...directives],
  exports:[...components,...pipes,...directives]
})
export class SharedModule {}
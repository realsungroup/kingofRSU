import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppRouterModule } from './app-router/app-router.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './main/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { BaseComponent } from './base-component/base.component';

import { BaseHttpService } from './base-http-service/base-http.service';
import { AppService } from './app.service';
import { FloatBuildPipe } from './shared/pipes/float-build.pipe';
import { StorageService } from './util/storage/storage.service';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    BaseComponent,
    FloatBuildPipe
  ],
  entryComponents:[],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: '../assets/fonts/iconfont' }),
    AppRouterModule,
    MainModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [BaseHttpService, AppService,{provide: LocationStrategy,useClass: HashLocationStrategy},StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

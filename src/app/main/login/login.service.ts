import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../base-http-service/base-http.service';
import { AppService } from '../../app.service';
import { dataType } from '../../enum/http.enum';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginInterface } from './login.interface';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {
  path: any;

  constructor(private httpService: BaseHttpService,
    private appSve: AppService,
    private router: Router) {
    this.path = window.app["path"];
  }

  public login(type: string, loginParams: LoginInterface) {
    let userStr: string = loginParams.account; //'80881';
    let params;
    let url = this.path.loginBaseUrl + this.path.login;
    window.app["badgeNo"] = userStr;
    let passWordStr: string = loginParams.passWord;
    if (type == 'badgeno') {
      params = { "badgeno": userStr, "Password": passWordStr };
      return this.httpService.baseRequest("POST", url, params, dataType.LoginEM);
    } else if (type == 'badgenodynamic') {
      params = { "badgeno": userStr, "Ucode": passWordStr };
      return this.httpService.baseRequest("POST", url, params, dataType.LoginDynamicEM);
    } else if (type == 'defaultdynamic') {
      params = { "Code": userStr, "Ucode": passWordStr };
      return this.httpService.baseRequest("POST", url, params, dataType.LoginDefaultDynamicEM);
    } else if (type == 'default') {
      params = { "code": userStr, "Password": passWordStr };//{ "code": '001', "Password": '123456' };
      return this.httpService.baseRequest("POST", url, params, dataType.LoginDefaultEM);
    }
  }

  getRouteData() {
    return new Observable(observer => {

      let dataArr = [];
      if (!environment.production) {
        dataArr = [{
          C3_558541978410: '/main',
          C3_558541903900: 0,
          C3_558541922352: "",
          C3_558541943043: "main",
          C3_558541955195: "main"
        }, {
          C3_558541978410: '/main/rsu',
          C3_558541903900: 1,
          C3_558541922352: "main",
          C3_558541943043: "rsu",
          C3_558541955195: "rsu"
        },
        {
          C3_558541978410: '/main/staffList',
          C3_558541903900: 1,
          C3_558541922352: "main",
          C3_558541943043: "staffList",
          C3_558541955195: "staffList"
        }, {
          C3_558541978410: '/main/staffListExport',
          C3_558541903900: 1,
          C3_558541922352: "main",
          C3_558541943043: "staffListExport",
          C3_558541955195: "staffListExport"
        }, {
          C3_558541978410: '/main/teamEdit',
          C3_558541903900: 1,
          C3_558541922352: "main",
          C3_558541943043: "teamEdit",
          C3_558541955195: "teamEdit"
        }, {
          C3_558541978410: '/main/rsuPend',
          C3_558541903900: 1,
          C3_558541922352: "main",
          C3_558541943043: "rsuPend",
          C3_558541955195: "rsuPend"
        },
        {
          C3_558541978410: '/main/clearCache',
          C3_558541903900: 0,
          C3_558541922352: "",
          C3_558541943043: "clearCache",
          C3_558541955195: "clearCache"
        }];
      }
      window.app["routesArr"] = dataArr;

      let filterRouteArr = this.filterRoute(this.router.config[2].children, dataArr);
      this.router.config[2].children = filterRouteArr;

      observer.next();
      observer.complete();
    })


    // let params = {
    //   'resid': 558542569195
    // }
    // let url = this.path.baseUrl + this.path.getData;
    // return new Observable(observer => {
    //   this.httpService.baseRequest("GET", url, params, dataType.HostTableDataEM).subscribe(
    //     data => {
    //       if (data && data.data) {
    //         let dataArr = data.data;
    //         window.app["routesArr"] = dataArr;

    //         let filterRouteArr = this.filterRoute(this.router.config[2].children, dataArr);
    //         this.router.config[2].children = filterRouteArr;

    //         observer.next();
    //       } else {
    //         observer.error();
    //       }
    //       observer.complete();
    //     },
    //     err => {
    //       observer.error();
    //       observer.complete();
    //     },
    //     () => {
    //       // observer.complete();
    //     });
    // })

  }

  private filterRoute(routes: Array<any>, routeArr: Array<any>) {
    return routes.filter((r: any) => {
      if (r.hasOwnProperty("pathMatch")) return true;

      if (!!!routeArr.filter(val => {
        if (r.link == val.C3_558541978410) {
          r.class = val.C3_558541903900;
          r.parent = val.C3_558541922352;
          r.title = val.C3_558541943043;
          return true;
        } else return false;
      }).length) {
        return false;
      }

      if (r.children && !!r.children.length) {
        r.children = this.filterRoute(r.children, routeArr);
      }

      return true;
    })
  }

  setAPITimeOut() {
    const path = this.httpService.path;
    let timeOutUrl = path.baseUrl + path.timeOut;
    const timeOutParams = {
      timeout: 100000
    }
    this.httpService.baseRequest("GET", timeOutUrl, timeOutParams, this.httpService.dataT.UnKnow).subscribe(
      data => {

      },
      error => {

      }
    )
  }

}

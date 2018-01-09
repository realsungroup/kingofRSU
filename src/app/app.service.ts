import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare global {
  interface Window {
    app: any;
    debug: boolean;
  }
}

@Injectable()


export class AppService {
  
  app: any;
  
  constructor(private http: Http) {
    window.debug = false;
    this.loadAppConfigJsonSync();
  }

  loadAppConfigJsonSync() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../assets/app.config.json', false);
    xhr.onload = () => {
      this.app = JSON.parse(xhr.response)
      window.app = this.app;
    }
    xhr.send();
  }

}



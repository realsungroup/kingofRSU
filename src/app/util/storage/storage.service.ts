import { Injectable } from '@angular/core';

const USER_INFO = "useInfo";
const ROUTER = "router";

@Injectable()
export class StorageService {

  constructor() { }

  private setItem(key, data) {
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
  }

  private getItem(key) {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  }

  setUserInfo(data) {
    console.info("setUserInfo", data)
    this.setItem(USER_INFO, data);
  }

  getUserInfo(): any {
    console.info("getUserInfo", localStorage.getItem(USER_INFO))
    return this.getItem(USER_INFO);
  }

  setRouter(data) {
    this.setItem(ROUTER, data);
  }

  getRouter(): any {
    return this.getItem(ROUTER);
  }
}

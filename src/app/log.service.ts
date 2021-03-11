import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  // tslint:disable-next-line:ban-types
  log: String[] = [];
  constructor() { }

  // tslint:disable-next-line:ban-types
  logging(message: String): void {
    this.log.push(message);
  }
}

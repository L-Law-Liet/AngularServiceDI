import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  value = 'Shared Value';
  constructor() { }
}

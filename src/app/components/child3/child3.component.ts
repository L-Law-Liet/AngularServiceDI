import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {LogService} from '../../log.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'],
  providers : [SharedService]
})
export class Child3Component implements OnInit {

  constructor(public service: SharedService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.logService.logging('load shared value in child3');
  }
}

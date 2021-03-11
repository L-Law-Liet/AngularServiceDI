import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {LogService} from '../../log.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  providers : [SharedService]
})
export class Child2Component implements OnInit {

  constructor(public service: SharedService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.logService.logging('load shared value in child2');
  }

}

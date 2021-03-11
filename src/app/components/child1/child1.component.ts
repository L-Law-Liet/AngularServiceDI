import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {LogService} from '../../log.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  providers : [SharedService]
})
export class Child1Component implements OnInit {

  constructor(public service: SharedService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.logService.logging('load shared value in child1');
  }

}

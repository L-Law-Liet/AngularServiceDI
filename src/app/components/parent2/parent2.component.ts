import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {LogService} from '../../log.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
  providers : [SharedService]
})
export class Parent2Component implements OnInit {

  constructor(public service: SharedService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.logService.logging('load shared value in parent2');
  }

}

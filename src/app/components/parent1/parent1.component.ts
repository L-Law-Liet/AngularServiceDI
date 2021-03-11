import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';
import {LogService} from '../../log.service';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css'],
  providers : [SharedService]
})
export class Parent1Component implements OnInit {

  constructor(public service: SharedService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.logService.logging('load shared value in parent1');
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { IDashboardDto } from 'src/app/interfaces/dashboard.Dto';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './dashboard-cards.component.html',
  styleUrls: ['./dashboard-cards.component.css']
})
export class DashboardCardsComponent implements OnInit {

  @Input()
  cards: IDashboardDto[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import { IDashboardDto } from 'src/app/interfaces/dashboard.Dto';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardCards: IDashboardDto[] | undefined;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardCards();
  }

  loadDashboardCards() {

    this.dashboardService.getDashboardCards()
      .subscribe((cards: IDashboardDto[]) => {

        this.dashboardCards = cards;
        console.log(this.dashboardCards);
      });

  }

}

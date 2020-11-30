import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { IDashboardDto } from '../interfaces/dashboard.Dto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getDashboardCards(): Observable<IDashboardDto[]> {

    let cardsSubject = new Subject<IDashboardDto[]>()
    setTimeout(() => {cardsSubject.next(CARDS); cardsSubject.complete(); }, 500)
    return cardsSubject;
    // return of(CARDS);
  }

}

const CARDS: IDashboardDto[] = [
  {
    id: '1',
    cardHeader: 'Conferences',
    cardTitle: 'Technical Conferences',
    cardText: 'Details about different conferences being conducted.',
    buttonText: 'Conferences'
  },
  {
    id: '2',
    cardHeader: 'Events',
    cardTitle: 'Technical Events',
    cardText: 'Details about different events being conducted.',
    buttonText: 'Coming Soon'
  },
  {
    id: '3',
    cardHeader: 'Sessions',
    cardTitle: 'Technical Sessions',
    cardText: 'Details about different sessions being conducted.',
    buttonText: 'Coming Soon'
  },
  {
    id: '4',
    cardHeader: 'Speakers',
    cardTitle: 'Technical Speakers',
    cardText: 'Details about different Speacker.',
    buttonText: 'Coming Soon'
  }
]

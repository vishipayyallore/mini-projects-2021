import { Component, OnInit } from '@angular/core';

import { IEmployee } from 'src/app/interfaces/iemployee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  cardTitle: string;
  showPicture: boolean;
  employee: IEmployee;

  employeesList: IEmployee[];

  constructor() {

    this.cardTitle = 'Employee Details';
    this.showPicture = true;
  }

  ngOnInit(): void {

    this.employeesList = [
      {
        id: 'A101',
        fullName: 'Mithun Nair',
        pictureUrl: 'assets/images/Emp1.png',
        department: 'Software',
        age: 25,
        address: {
          street: 'Safilguda',
          city: 'Hyderabad',
          state: 'Telangana'
        },
        rating: 4.2
      },
      {
        id: 'A102',
        fullName: 'George Reddy',
        pictureUrl: 'assets/images/Emp2.png',
        department: 'Hardward',
        age: 25,
        address: {
          street: 'Safilguda',
          city: 'Hyderabad',
          state: 'Telangana'
        },
        rating: 4.7
      },
      {
        id: 'A103',
        fullName: 'Manpreet Singh',
        pictureUrl: 'assets/images/Emp3.png',
        department: 'Software',
        age: 25,
        address: {
          street: 'Safilguda',
          city: 'Hyderabad',
          state: 'Telangana'
        },
        rating: 3.4
      }
    ];

  }

  togglePicture(): void{

    console.log(this.showPicture ? 'Hiding the picture' : 'Showing the picture');

    this.showPicture = !this.showPicture;
  }

  onRatingClicked(currentRating: number): void{
    console.log(`Current Selected Rating: ${currentRating}`);
  }

}

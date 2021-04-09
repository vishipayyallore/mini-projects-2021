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

    // this.cardTitle = 125;
    this.cardTitle = 'Employee Details';
    this.showPicture = true;
  }

  ngOnInit(): void {

    this.employeesList = [
      {
        id: 'A101',
        fullName: 'Shiva Sai',
        pictureUrl: 'assets/images/Emp1.png',
        department: 'Software',
        age: 25,
        address: {
          street: 'Safilguda',
          city: 'Hyderabad',
          state: 'Telangana'
        }
  
      },
      {
        id: 'A102',
        fullName: 'Mathew Philips',
        pictureUrl: 'assets/images/Emp2.png',
        department: 'Hardward',
        age: 25,
        address: {
          street: 'Safilguda',
          city: 'Hyderabad',
          state: 'Telangana'
        }
  
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
        }
  
      }
    ];

    this.employee = {
      id: 'A101',
      fullName: 'Shiva Sai',
      pictureUrl: 'assets/images/Emp1.png',
      department: 'Software',
      age: 25,
      address: {
        street: 'Safilguda',
        city: 'Hyderabad',
        state: 'Telangana'
      }

    };
  }

  togglePicture(): void{

    console.log(this.showPicture ? 'Hiding the picture' : 'Showing the picture');

    this.showPicture = !this.showPicture;
  }

}

import { Component, OnInit } from '@angular/core';

import { IProfessor } from '../../interfaces/IProfessor';

@Component({
  selector: 'app-professorv3',
  templateUrl: './professorv3.component.html',
  styleUrls: ['./professorv3.component.css']
})
export class ProfessorV3Component implements OnInit {

  professor: IProfessor;

  constructor() {
    this.professor = {
      professorId: 3,
      name: '<script>alert("Hello");</script>Hafeez',
      dateOfJoin: new Date(),
      salary: 1234.5678,
      isPhd: true
    };
  }

  ngOnInit(): void {
  }

}

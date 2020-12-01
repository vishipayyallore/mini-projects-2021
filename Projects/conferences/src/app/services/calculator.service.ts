import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) { }

  add(value1: number, value2: number) {

    this.logger.log("Addition operation called");
    return value1 + value2;
  }

  subtract(value1: number, value2: number) {

    this.logger.log("Subtraction operation called");
    return value1 - value2;
  }

}


import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

/*
  1. Pending() specs do not run, but their names will show up in the results as pending.
  2. const logger = new LoggerService();
  2. spyOn(logger, 'log');
  3. xdescribe() to disable the Suite
  4. xit() to disable the test case.
  5. fdescribe() foucs describe, will execute only that suite.
  6. fit() foucs test, will execute only that test case.
*/

describe('Calculator Service Suite', () => {

  describe('Calculator Service Suite - Version 1', () => {

    let calculatorService: CalculatorService;
    const logger = new LoggerService();

    beforeEach(() => {
      spyOn(logger, 'log');
      calculatorService = new CalculatorService(logger);
    });

    it('should add two numbers - Spec', () => {
      const sum = calculatorService.add(2, 2);

      expect(sum).toBe(4);
      expect(logger.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers - Spec', () => {
      const results = calculatorService.subtract(4, 2);

      expect(results).toBe(2);
      expect(logger.log).toHaveBeenCalledTimes(1);
    });

  });

  describe('Calculator Service Suite - Version 2', () => {

    let calculatorService: CalculatorService,
      loggerSpy: any;

    beforeEach(() => {
      loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);
      calculatorService = new CalculatorService(loggerSpy);
    });

    afterEach(() => {
      loggerSpy.log.calls.reset(); // Resetting the Call Count
    });

    it('should add two numbers - Spec', () => {
      const sum = calculatorService.add(2, 2);
      const toBeValue = 4;

      expect(sum).toBe(toBeValue, `Results ${sum} did not match the expected ${toBeValue}.`);
      expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers - Spec', () => {
      const results = calculatorService.subtract(4, 2);
      const toBeValue = 2;

      expect(results).toBe(toBeValue, `Results ${results} did not match the expected ${toBeValue}.`);
      expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

  });

  describe('Calculator Service Suite - Version 3', () => {

    let calculatorService: CalculatorService,
      loggerSpy: any;

    beforeEach(() => {
      loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

      TestBed.configureTestingModule({
        providers: [
          CalculatorService,
          { provide: LoggerService, useValue: loggerSpy }
        ]
      });

      calculatorService = TestBed.inject(CalculatorService);
    });

    afterEach(() => {
      loggerSpy.log.calls.reset(); // Resetting the Call Count
    });

    it('should add two numbers - Spec', () => {
      const sum = calculatorService.add(2, 2);
      const toBeValue = 4;

      expect(sum).toBe(toBeValue, `Results ${sum} did not match the expected ${toBeValue}.`);
      expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers - Spec', () => {
      const results = calculatorService.subtract(4, 2);
      const toBeValue = 2;

      expect(results).toBe(toBeValue, `Results ${results} did not match the expected ${toBeValue}.`);
      expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

  });

});


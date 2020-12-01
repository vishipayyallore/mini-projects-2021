import { CalculatorService } from "./calculator.service";
// import { LoggerService } from "./logger.service";

/*
  1. Pending() specs do not run, but their names will show up in the results as pending.
  2. const logger = new LoggerService();
  2. spyOn(logger, 'log');
*/
describe('Calculator Service', () => {

  let calculatorService: CalculatorService;
  const logger = jasmine.createSpyObj('LoggerService', ['log']);

  beforeEach(() => {
    calculatorService = new CalculatorService(logger);
  });

  afterEach(() => {
    // Resetting the Call Count
    logger.log.calls.reset();
  });

  it('should add two numbers', () => {
    const sum = calculatorService.add(2, 2);
    const toBeValue = 4;

    expect(sum).toBe(toBeValue, `Results ${sum} did not match the expected ${toBeValue}.`);

    expect(logger.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const results = calculatorService.subtract(4, 2);
    const toBeValue = 2;

    expect(results).toBe(toBeValue, `Results ${results} did not match the expected ${toBeValue}.`);

    expect(logger.log).toHaveBeenCalledTimes(1);
  });

});

import { BookDto } from './book.dto';

describe('BookDto', () => {
  it('should be defined', () => {
    expect(new BookDto()).toBeDefined();
  });
});

import { Injectable } from '@nestjs/common';

import { AppDto } from '../models/app.dto';
import { BookDto } from '../models/book.dto';

@Injectable()
export class AppService {

  private books: BookDto[] = [
    { id: 1, author: 'Shiva Sai' },
    { id: 2, author: 'Rajesh Agarwal' }
  ];

  getHello(): AppDto {

    return { success: true, message: 'Books Stores Web API in NestJS.' };
  }

  getAllBooks(): BookDto[] {

    return this.books;
  }

}

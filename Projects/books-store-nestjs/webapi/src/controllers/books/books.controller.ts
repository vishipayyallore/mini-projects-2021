import { Controller, Get } from '@nestjs/common';

import { BookDto } from '../../models/book.dto';
import { AppService } from '../../services/app.service';

@Controller('/api/v1/books')
export class BooksController {

    constructor(private readonly appService: AppService) {
    }

    @Get()
    getAllBooks(): BookDto[] {
        
        return this.appService.getAllBooks();
    }

}

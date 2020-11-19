import { Module } from '@nestjs/common';
import { AppController } from './controllers/app/app.controller';
import { AppService } from './services/app.service';
import { BooksController } from './controllers/books/books.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    BooksController
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }

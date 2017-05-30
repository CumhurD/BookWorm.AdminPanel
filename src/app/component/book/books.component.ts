import { Component } from '@angular/core';
import {BookService} from 'service/book.service';

@Component({
    templateUrl: 'books.component.html'
})
export class BooksComponent {
    /**
     *
     */
    constructor(private $bookService: BookService) {
        
    }
}
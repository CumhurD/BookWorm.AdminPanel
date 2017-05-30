import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class BookService {
    constructor(private $http: Http) {
        
    }

    getBooks(authorName: string, genres: string[]){
        let uri = '/books?';

        if (authorName)
            uri += 'authorName=' + authorName + '&';
        
        if (genres && genres.length > 0)
            uri += 'genres=' + genres.join('|');

        return this.$http.get(uri);
    }

    getBookById(bookId: string){
        return this.$http.get('/books/'+bookId);
    }
}
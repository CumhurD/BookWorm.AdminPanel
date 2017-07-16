import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { environment } from 'environments/environment';

@Injectable()
export class BookService {
    constructor(private $http: Http) {
    }
 
    getBooks(authorName: string, genres: string[]){
        let uri = environment.bookwormApiUrl + '/books?';

        if (authorName)
            uri += 'authorName=' + authorName + '&';
        
        if (genres && genres.length > 0)
            uri += 'genres=' + genres.join('|');
 
        return this.$http.get(uri);
    }
  
    getBookById(bookId: string){
        return this.$http.get( environment.bookwormApiUrl +'/books/'+bookId);
    }

    insertBook(authorId: string, genreNames: string[], title: string){
        return this.$http.post( environment.bookwormApiUrl +'/books', {'authorId': authorId, 'genreNames': genreNames, 'title': title});
    }

    getGenres(){
        return this.$http.get(environment.bookwormApiUrl +'/genres');
    }
    getAuthors(){
        return this.$http.get(environment.bookwormApiUrl + '/authors');
    }
}
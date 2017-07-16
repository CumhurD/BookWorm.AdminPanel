import { Component, OnInit } from '@angular/core';
import { BookService } from '@service/bookworm-api.service';

@Component({
    templateUrl: 'books.component.html'
})
export class BooksComponent implements OnInit {
    ngOnInit(): void {
        this.refreshGenres();
        this.refreshAuthors();
    } 

    private genres: any[];
    private authors: any[];

    private selectedAuthor: any;
    private selectedGenre: any;
    private title:string;
    
    constructor(private $bookService: BookService) {
    }

    onAddButtonClicked(): void{
        debugger;
        this.$bookService.insertBook(this.selectedAuthor.id, [this.selectedGenre.id],this.title).subscribe(
            response => {
                debugger;
            },
            error => {
                debugger;
            }
        );
    }

    refreshGenres(){
        this.$bookService.getGenres().subscribe(response =>{
            this.genres = response.json();
        })
    }

    refreshAuthors(){
        this.$bookService.getAuthors().subscribe(response =>{
            this.authors= response.json();
        });
    }
}
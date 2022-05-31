import { Component } from '@angular/core';
import { Page } from 'src/types';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: Page[] = [];
  constructor(private wikipedia: WikipediaService) {
  }
  
  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
      
    })
    
  }
}

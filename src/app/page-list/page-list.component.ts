import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/types';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  @Input() pages: Page[] = []

  constructor() { }

  ngOnInit(): void {
  }

}

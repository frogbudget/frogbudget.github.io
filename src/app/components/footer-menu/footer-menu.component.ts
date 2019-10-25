import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss']
})
export class FooterMenuComponent implements OnInit {
  todaysDate = new Date();
  copyrightYear = this.todaysDate.getFullYear();

  constructor() { }

  ngOnInit() {

  }

}

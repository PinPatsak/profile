import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    currentSection = 'home';
    constructor() { }

    ngOnInit() {
    }
    scrollTo(element: string): void {
        this.currentSection = element;
        document.querySelector('#' + element).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    onSectionChange(sectionId: string) {
        this.currentSection = sectionId;
      }


}

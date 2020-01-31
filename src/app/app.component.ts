import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'profile';
    constructor(
        public translate: TranslateService) {
        translate.addLangs(['en', 'th']);
        if (localStorage.getItem('locale')) {
            const browserLang = localStorage.getItem('locale');
            translate.use(browserLang.match(/en|th/) ? browserLang : 'en');
        } else {
            localStorage.setItem('locale', 'en');
            translate.setDefaultLang('en');
        }
    }
    changeLang(language: string) {
        localStorage.setItem('locale', language);
        this.translate.use(language);
    }

    currentSection = 'section1';

    onSectionChange(sectionId: string) {
      this.currentSection = sectionId;
      console.log(this.currentSection);
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { NavbarComponent } from './components/navbar/navbar.component';

export const createTranslateLoder = (http: HttpClient) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    ScrollSpyDirective,
    NavbarComponent
  ],
  exports: [
    TranslateModule,
    ScrollSpyDirective,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoder,
            deps: [HttpClient]
        }

    })
  ]
})
export class SharedModule { }

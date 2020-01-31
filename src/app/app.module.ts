import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { ServicesModule } from './modules/services/services.module';
import { ExperienceModule } from './modules/experience/experience.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { BlogModule } from './modules/blog/blog.module';
import { FooterModule } from './modules/footer/footer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        AboutModule,
        ServicesModule,
        ExperienceModule,
        PortfolioModule,
        BlogModule,
        FooterModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

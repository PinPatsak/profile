import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [AboutComponent],
  exports:[
    AboutComponent
  ],
  imports: [
    CommonModule,
    OwlModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

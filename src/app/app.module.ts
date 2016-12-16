import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import {RacingDataService} from './racing-data.service';
import { CarPartComponent } from './car-part/car-part.component';
import { PartDetailComponent } from './part-detail/part-detail.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CarPartsComponent,
    CarPartComponent,
    PartDetailComponent,
    AboutSectionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'car-parts',pathMatch:'full'},
      {path:  'car-parts', component: CarPartsComponent},
      {path:  'car-parts/:id/:imgLink', component: PartDetailComponent}
    ])
  ],
  providers: [RacingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

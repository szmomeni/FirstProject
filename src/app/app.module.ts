import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HousingLocationComponent,
    DetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
   
  ],
  // از فایل مسیریابی پیش فرض استفاده میکنه
  providers: [],
  bootstrap: [ AppModule ]
})
export class AppModule { }

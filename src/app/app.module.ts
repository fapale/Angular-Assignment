import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SearchCardsPipe } from './search-cards.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SearchCardsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule,
    CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

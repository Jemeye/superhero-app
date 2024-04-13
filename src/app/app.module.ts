import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperheroCardComponent } from './components/superhero-card/superhero-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { ComicsComponent } from './pages/comics/comics.component';
import { HomeComponent } from './pages/home/home.component';
import { SuperheroBannerComponent } from './components/superhero-banner/superhero-banner.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperheroCardComponent,
    SearchComponent,
    ComicsComponent,
    HomeComponent,
    SuperheroBannerComponent,
    ComicCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    HttpClientXsrfModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

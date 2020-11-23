import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MusicComponent } from './music/music.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { AddArtistFormComponent } from './add-artist-form/add-artist-form.component';
import { ArtistItemListComponent } from './artist-item-list/artist-item-list.component';
import { ArtistItemCardComponent } from './artist-item-list/artist-item-card/artist-item-card.component';
import { EditItemModalComponent } from './edit-item-modal/edit-item-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    MusicComponent,
    HomeComponent,
    AddArtistFormComponent,
    ArtistItemListComponent,
    ArtistItemCardComponent,
    EditItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    YouTubePlayerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { MusicComponent } from './music/music.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'portfolio',
    component: PortfolioComponent
  },
  {
    path:'music',
    component: MusicComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

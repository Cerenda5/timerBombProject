import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { CardsComponent } from './cards/cards.component';
import { PageCardsComponent } from './page-cards/page-cards.component';
import { PagePlayersComponent } from './page-players/page-players.component';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes = [
  { path : 'accueil', component: PageHomeComponent},
  { path : 'cards', component: PageCardsComponent},
  { path : 'players', component: PagePlayersComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CardsComponent,
    PagePlayersComponent,
    PageCardsComponent,
    PageHomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

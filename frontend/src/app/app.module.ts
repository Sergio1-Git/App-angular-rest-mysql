import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './site/components/header/header.component';
import { GameFormComponent } from './site/pages/game-form/game-form.component';
import { GameListComponent } from './site/pages/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameFormComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BigCardHomeComponent } from './components/home-components/big-card-home/big-card-home.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { MiniCardComponent } from './components/projetos-components/mini-card/mini-card.component';
import { WaveComponent } from './components/home-components/wave/wave.component';
import { ResumeComponent } from './pages/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCardHomeComponent,
    ProjetosComponent,
    MiniCardComponent,
    WaveComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

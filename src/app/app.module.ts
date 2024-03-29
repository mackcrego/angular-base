import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
//import { CounterComponent } from './counter/counter.component';
//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule,
   // AppRoutingModule,
   // AppComponent
  ],
  /*providers: [
    provideClientHydration()
  ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

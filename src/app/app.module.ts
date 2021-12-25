import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { Routes, RouterModule } from '@angular/router';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyCoins } from './coins/coins.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, appRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyCoins,
    AboutComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

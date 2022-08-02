import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanceComponent } from './Components/finance/finance.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

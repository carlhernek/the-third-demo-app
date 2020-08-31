import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdCmsModule } from '@carlhernek/the-third-cms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ThirdCmsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

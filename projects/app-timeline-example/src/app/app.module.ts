import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocoTimelineModule } from 'timeline';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CocoTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

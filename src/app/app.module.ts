import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';

import { SimpleTimer } from 'ng2-simple-timer';
import { SegundosPipe } from './pipes/segundos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    SegundosPipe

  ],
  imports: [
    BrowserModule
  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }

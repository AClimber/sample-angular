import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RuleListModule } from './components/rule-list/rule-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RuleListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

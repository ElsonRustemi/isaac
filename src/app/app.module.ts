import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { InsertCfDataComponent } from './components/insert-cf-data/insert-cf-data.component';
import { CompareCFComponent } from './components/compare-cf/compare-cf.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertCfDataComponent,
    CompareCFComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

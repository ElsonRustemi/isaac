import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TableModule} from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import {FileUploadModule} from 'primeng/fileupload';
import {TreeModule} from 'primeng/tree';


import { AppComponent } from './app.component';
import { InsertCfDataComponent } from './components/insert-cf-data/insert-cf-data.component';
import { CompareCFComponent } from './components/compare-cf/compare-cf.component';
import { ComparisonReportsComponent } from './components/comparison-reports/comparison-reports.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCFComponent } from './components/list-cf/list-cf.component';
import { SelectedCfCompareComponent } from './components/selected-cf-compare/selected-cf-compare.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertCfDataComponent,
    CompareCFComponent,
    ComparisonReportsComponent,
    ListCFComponent,
    SelectedCfCompareComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    TableModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FileUploadModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

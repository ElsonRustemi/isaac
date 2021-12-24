import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareCFComponent } from './components/compare-cf/compare-cf.component';
import { ComparisonReportsComponent } from './components/comparison-reports/comparison-reports.component';
import { InsertCfDataComponent } from './components/insert-cf-data/insert-cf-data.component';
import { ListCFComponent } from './components/list-cf/list-cf.component';

const routes: Routes = [
  {path: '', component: InsertCfDataComponent},
  {path: "2", component: CompareCFComponent},
  {path: "3", component: ComparisonReportsComponent},
  {path: "4", component: ListCFComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

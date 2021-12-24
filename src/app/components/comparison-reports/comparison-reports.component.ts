import { Component, OnInit } from '@angular/core';
import { DataserviceService, Data } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-comparison-reports',
  templateUrl: './comparison-reports.component.html',
  styleUrls: ['./comparison-reports.component.css']
})
export class ComparisonReportsComponent implements OnInit {

  testData: Data[];

  constructor(private dataService: DataserviceService) { }

  ngOnInit() {

    this.dataService.getDummyData().then(data => this.testData = data);

  }

}

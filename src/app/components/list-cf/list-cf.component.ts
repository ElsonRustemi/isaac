import { Component, OnInit } from '@angular/core';
import { DataserviceService, Data } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-list-cf',
  templateUrl: './list-cf.component.html',
  styleUrls: ['./list-cf.component.css']
})
export class ListCFComponent implements OnInit {

  display: boolean = false;


  testData: Data[];

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {

    this.dataService.getDummyData().then(data => this.testData = data);

  }

  showDialog() {
    this.display = true;
  }

}

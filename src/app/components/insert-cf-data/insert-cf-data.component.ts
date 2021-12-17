import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-cf-data',
  templateUrl: './insert-cf-data.component.html',
  styleUrls: ['./insert-cf-data.component.css']
})
export class InsertCfDataComponent implements OnInit {


  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
}

}

import { Component, OnInit } from '@angular/core';
import {  TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-insert-cf-data',
  templateUrl: './insert-cf-data.component.html',
  styleUrls: ['./insert-cf-data.component.css']
})
export class InsertCfDataComponent implements OnInit {


  display: boolean = false;
  // filesIsSelected: boolean = false;

  files: TreeNode[];
  uploadedFiles: any[] = [];

  imageFiles: TreeNode[];
  uploadedImages: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // CSV Upload fun
  onUpload(event) {

  }

  // myUploader(event) {
  //   this.display = true;
  // }

  // Image Upload fun
  onUploadImage(event) {

  }

  showDialog() {
    this.display = true;
  }

}

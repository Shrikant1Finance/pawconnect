import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  file:any;
  getFiles(event:any){
    this.file = event.target.files[0];
    console.log(this.file);
  }
 
}

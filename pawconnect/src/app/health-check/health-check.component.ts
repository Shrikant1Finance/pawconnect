import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.scss']
})
export class HealthCheckComponent implements OnInit{
  file: any = null;
  symptom: any = null;
  response: any;
  previewUrl: string | ArrayBuffer | null = null;
  data:any;

  healthrecords = false;
  isshowupload = true;

  cities2 = [
      {id: 1, name: 'Vilnius'},
      {id: 2, name: 'Kaunas'},
      {id: 3, name: 'Pavilnys', disabled: true},
      {id: 4, name: 'Pabradė'},
      {id: 5, name: 'Klaipėda'}
  ];
  users = [
      {id: 'anjmao', name: 'Anjmao'},
      {id: 'varnas', name: 'Tadeus Varnas'}
  ];

  constructor(private apiService: ApiService, private http: HttpClient) {}

  ngOnInit(): void {
    
  }

 

  addCustomUser = (term: any) => ({id: term, name: term});



  selectedUserIds: string[] = [];

  // constructor(private http: HttpClient) {} // Removed duplicate constructor

  getFiles(event:any){
    this.file = event.target.files[0];
    if (this.file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.file);
    }
    console.log(this.file);
  }


  uploadFile(){


    if (this.file) {
      this.healthrecords = true;
      this.isshowupload = false;
      
      this.apiService.uploadFile(this.file).subscribe(
        (res) => {
          console.log('Upload Successful:', res);
          this.response = res;
        },
        (err) => {
          console.error('Upload Failed:', err);
          this.healthrecords = false;
        }
      );
    }
  }

}

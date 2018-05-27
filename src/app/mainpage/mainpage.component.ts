import { Component, OnInit } from '@angular/core';
import {ChartService} from '../chart.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
var global_num = 12 ;
var j:any;

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  private apiRoot: string = "/assets/data/data.json";
  public data:any;

      myClickFunction() {

       
        this.ChartService.showbar();

      
        
      }

      bar() {

        this.ChartService.showarea();

        

        
      }


      constructor(private ChartService : ChartService, private http: HttpClient) {
        
    

        }

  ngOnInit() {
            this.ChartService.data()
            let url = `${this.apiRoot}`;
            this.http.get(url).
            subscribe(res => {
              j = res;
              console.log(j);

      }
    ); 

}

}

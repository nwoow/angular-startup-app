import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { IEmployee } from './chart';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { log } from 'util';

    declare var google:any;


    @Injectable({
      providedIn: 'root'
    })
    export class ChartService {
       j:any;


      private apiRoot: string = "/assets/data/data.json";

      constructor(private http: HttpClient) { }

      getEmployees(){
        console.log("GET");
        let url = `${this.apiRoot}`;
        this.http.get(url).
        subscribe(res => {
          this.j = res;
          console.log(this.j);
          
   }

); 
        

      }
  
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }

  data(){
    var  j:any;
    let url = `${this.apiRoot}`;
    this.http.get(url).
        subscribe(res => {
          j = res;
          console.log(j);
        google.charts.load('current', {'packages':['corechart']});

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
          var data = new google.visualization.DataTable(j);
          // data.addColumn('string', 'Topping');
          // data.addColumn('number', 'Slices');
          // data.addRows(j);
          
          var options = {'title':'How Much Pizza I Ate Last Night',
                        'width':400,
                        'height':300};
          var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
          chart.draw(data, options);
        }

            }
            );
  } 

  showarea() {

    
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2013',  1000,      400],
          ['2014',  1170,      460],
          ['2015',  660,       1120],
          ['2016',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

 }

  showbar() {
   var j = [
      ['Mushrooms', 3],
      ['Onions', 1]
    ]
  
  

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows(j);

    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                   'width':400,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
  }  
} 
}

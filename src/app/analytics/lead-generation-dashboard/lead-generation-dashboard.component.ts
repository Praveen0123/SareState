import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-lead-generation-dashboard',
  templateUrl: './lead-generation-dashboard.component.html',
  styleUrls: ['./lead-generation-dashboard.component.scss']
})
export class LeadGenerationDashboardComponent implements OnInit {

  public settings: Settings;
  public filterToggle : boolean;
  constructor(public appSettings:AppSettings){
    this.settings = this.appSettings.settings; 
    
  }

  ngOnInit() {
  }
  chart = new Chart({
    chart: {
      type: 'column'
  },
  title: {
      text: 'Monthly Average Leads'
  },
  xAxis: {
      categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Leads vs Prospects vs Opportunities'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  credits:{
    enabled:false
  },
  series: [{
      name: 'Leads',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  
  }, {
      name: 'Prospects',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
  
  },
   {
      name: 'Opportunities',
      data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
  
  }]
  });
  

  piChart = new Chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Monthly Leads Status ,December'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true
      }
    },
    series: [{
      name: 'Lead',
      colorByPoint: true,
      data: [{
          name: 'Hot Lead',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Warm Lead',
          y: 11.84
      }, {
          name: 'Cold Lead',
          y: 10.85
      }, {
          name: 'Not interested',
          y: 4.67
      }, {
          name: 'Interested',
          y: 4.18
      }, {
          name: 'Decline',
          y: 7.05
      }]
    }]
    });
  

}

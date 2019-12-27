import { Component, OnInit, ElementRef, ViewChild ,NgModule} from '@angular/core';
import { analysis } from '../dashboard.data';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data/data.component';


@Component({
  selector: 'app-trend-chart',
  templateUrl: './trend-chart.component.html',
  styleUrls: ['./trend-chart.component.scss']
})
export class TrendChartComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [500, 400];

  // public analytics: any[];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'country';
  public showYAxisLabel = false;
  public yAxisLabel = 'Profit';
  public colorScheme = {
    domain: ['#283593', '#039BE5', '#FF5252']
  }; 
  public autoScale = true;
  public roundDomains = true;
  @ViewChild('resizedDiv') resizedDiv:ElementRef;
  public previousWidthOfResizedDiv:number = 0; 

  constructor() { 
    Object.assign(this, { single })
  }

  ngOnInit() {
    // this.analytics = analysis; 
  }

  onSelect(event) {
    console.log(event);
  }

  // ngAfterViewChecked() {    
  //   if(this.previousWidthOfResizedDiv != this.resizedDiv.nativeElement.clientWidth){
  //     this.analytics = [...analysis];
  //   }
  //   this.previousWidthOfResizedDiv = this.resizedDiv.nativeElement.clientWidth;
  // }


  
}

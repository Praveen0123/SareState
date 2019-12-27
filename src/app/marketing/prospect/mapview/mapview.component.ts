import { Component, OnInit,ChangeDetectorRef,ElementRef, ViewEncapsulation,ViewChild } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
declare var google: any;

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.scss']
})
export class MapviewComponent implements OnInit {
  @ViewChild('AgmMap') OppAgmMap: AgmMap;
  @ViewChild('AgmMap') PropAgmMap: AgmMap;
  public prospectPointers: any[] = [];
  public oppPointers: any[] = [];
  public lat: number = 17.7767;
  public lng: number = 78.7970; 
  public zoomControlOptions: any = {
    style: google.maps.ControlPosition.small,
    position: google.maps.ControlPosition.TOP_LEFT,
  };


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit,ChangeDetectorRef,ElementRef, ViewEncapsulation,ViewChild } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import { FormControl ,FormGroup} from '@angular/forms';
import { GoogleMapsAPIWrapper, AgmMap, LatLngBounds, LatLngBoundsLiteral} from '@agm/core';
declare var google: any;



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    
  tableList: any;  
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
  

  Status =['Open','Closed','Pending'];
  users=['Admin','Broker','Agent','Builder','Customer','Realtor']
  public settings: Settings;
  public filterToggle : boolean;
  constructor(public appSettings:AppSettings){
    this.settings = this.appSettings.settings; 
    
  }

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  ngOnInit() {

   this.tableList=[
       {id:1,activity:'Call back',Status:'Open'},
       {id:2,activity:'Site visit planned',Status:'Closed'},
       {id:3,activity:'Send email',Status:'Pending'}
   ]
  }
  
myform: FormGroup;
projectOptions = ["Port Area Initiative", "Basement Flooding", "Dome Scanning", "Culvert Topographic", "Bridge Topographic","Town House Foundation"];
projectOptionSelected: any;
onprojectptionsSelected(event) {
  
}
siteOptions = ["MISS201905123", "MISS202684235", "MISS202612598", "MISS202758926"];
siteOptionSelected: any;
onsiteOptionsSelected(event) {
  
}
regionOptions = ["Cordillera", "Prairies", "North", "Canadian Shield", "St. Lawrence River","Atlantic","Great Lakes"];
regionOptionSelected: any;
onregionOptionsSelected(event) {
 
}
cityOptions = ["Vancouver", "Ottawa", "Regina", "Toronto", "Charlottetown", "Edmonton ", "Fredericton "];
cityOptionSelected: any;
oncityOptionsSelected(event) {
 
}
roleOptions = ['Project Manager', 'Production Team', 'Project Admin', 'Administration', 'Field Staff', 'CAD Staff', 'Finance'];
roleOptionSelected: any;

onroleOptionsSelected(event) {
  
}
staffOptions = ["Dwayne", "Dave", "Emily", "Joe", "Kate", "Scott", "Ryan", "Chris", "Justin", "Ken", "Dan", "Tony", "Stephanie", "Laurie"];
staffOptionSelected: any;

onstaffOptionsSelected(event) {
  
}
projectstageOptions = ["Initiated", "Completed", "InProcess", "Pending"];
projectstageOptionSelected: any;

onprojectstageOptionsSelected(event) {
 
}
billingstatusOptions = ["Paid", "Overdue", "Pending"];
billingstatusOptionSelected: any;

onbillingstatusOptionsSelected(event) {
  
}
archivalstatusOptions = ["Date"];
archivalstatusOptionSelected: any;

onarchivalstatusOptionsSelected(event) {

}
chart = new Chart({
  chart: {
    type: 'column'
},
title: {
    text: 'December,2019'
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
        text: 'Number'
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
    name: 'Deals',
    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

}]
});
secondchart = new Chart({
  chart: {
    type: 'column'
},
title: {
    text: 'Stacked column chart'
},
xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
},
yAxis: {
    min: 0,
    title: {
        text: 'Total fruit consumption'
    },
    stackLabels: {
        enabled: true,
        style: {
            fontWeight: 'bold',
            color: ( // theme
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || 'gray'
        }
    }
},
legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
},
tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
},
plotOptions: {
    column: {
        stacking: 'normal',
        dataLabels: {
            enabled: true
        }
    }
},
series: [{
    name: 'John',
    data: [5, 3, 4, 7, 2]
}, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1]
}, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5]
}]
});

thirdchart = new Chart({
chart: {
  type: 'column'
},
title: {
  text: 'Stacked column chart'
},
xAxis: {
  categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
},
yAxis: {
  min: 0,
  title: {
      text: 'Total fruit consumption'
  },
  stackLabels: {
      enabled: true,
      style: {
          fontWeight: 'bold',
          color: ( // theme
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color
          ) || 'gray'
      }
  }
},
legend: {
  align: 'right',
  x: -30,
  verticalAlign: 'top',
  y: 25,
  floating: true,
  backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || 'white',
  borderColor: '#CCC',
  borderWidth: 1,
  shadow: false
},
tooltip: {
  headerFormat: '<b>{point.x}</b><br/>',
  pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
},
plotOptions: {
  column: {
      stacking: 'normal',
      dataLabels: {
          enabled: true
      }
  }
},
series: [{
  name: 'John',
  data: [5, 3, 4, 7, 2]
}, {
  name: 'Jane',
  data: [2, 2, 3, 2, 1]
}, {
  name: 'Joe',
  data: [3, 4, 4, 2, 5]
}]
});

opportunitieschart = new Chart({
chart: {
  type: 'column'
},
colors: ['#50B432', '#89cff0', '#f26161', '#DDDF00', 'pink', 'red', '#FF9655', '#FFF263', '#6AF9C4'],
title: {
  text: 'Prospect by Status'
},
subtitle: {
  text: ''
},
accessibility: {
  announceNewData: {
      enabled: true
  }
},
xAxis: {
  type: 'category'
},
yAxis: {
  title: {
      text: 'Deals'
  }

},
legend: {
  enabled: false
},
plotOptions: {
  series: {
      borderWidth: 0,
      dataLabels: {
          enabled: true,
          format: '{point.y:.1f}'
      }
  }
},

tooltip: {
  headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
},

series: [
  {
      name: "Opportunities",
      colorByPoint: true,
      data: [
          {
              name: "Deal Closed",
              y: 10,
              drilldown: "Deal Closed"
          },
          {
              name: "Need Review",
              y: 5,
              drilldown: "Need Review"
          },
          {
              name: "Negotiated",
              y: 7,
              drilldown: "Negotiated"
          },
          {
              name: "Site Visit Planned",
              y: 5,
              drilldown: "Site Visit Planned"
          },
          {
              name: "Site Visit Done",
              y: 4,
              drilldown: "Site Visit Done"
          },
          {
              name: "Decline",
              y: 3,
              drilldown: "Decline"
          },
          {
              name: "Hold",
              y: 7,
              drilldown: 'Hold'
          }
      ]
  }
],
drilldown: {
  series: [
      {
          name: "Deal Closed",
          id: "Deal Closed",
          data: [
              [
                  "v65.0",
                  5
              ],
              [
                  "v64.0",
                  1.3
              ],
              [
                  "v63.0",
                  53.02
              ],
              [
                  "v62.0",
                  1.4
              ],
              [
                  "v61.0",
                  0.88
              ],
              [
                  "v60.0",
                  0.56
              ],
              [
                  "v59.0",
                  0.45
              ],
              [
                  "v58.0",
                  0.49
              ],
              [
                  "v57.0",
                  0.32
              ],
              [
                  "v56.0",
                  0.29
              ],
              [
                  "v55.0",
                  0.79
              ],
              [
                  "v54.0",
                  0.18
              ],
              [
                  "v51.0",
                  0.13
              ],
              [
                  "v49.0",
                  2.16
              ],
              [
                  "v48.0",
                  0.13
              ],
              [
                  "v47.0",
                  0.11
              ],
              [
                  "v43.0",
                  0.17
              ],
              [
                  "v29.0",
                  0.26
              ]
          ]
          
      },
      {
          name: "Need Review",
          id: "Need Review",
          data: [
              [
                  "v58.0",
                  1.02
              ],
              [
                  "v57.0",
                  7.36
              ],
              [
                  "v56.0",
                  0.35
              ],
              [
                  "v55.0",
                  0.11
              ],
              [
                  "v54.0",
                  0.1
              ],
              [
                  "v52.0",
                  0.95
              ],
              [
                  "v51.0",
                  0.15
              ],
              [
                  "v50.0",
                  0.1
              ],
              [
                  "v48.0",
                  0.31
              ],
              [
                  "v47.0",
                  0.12
              ]
          ]
      },
      {
          name: "Negotiated ",
          id: "Negotiated ",
          data: [
              [
                  "v11.0",
                  6.2
              ],
              [
                  "v10.0",
                  0.29
              ],
              [
                  "v9.0",
                  0.27
              ],
              [
                  "v8.0",
                  0.47
              ]
          ]
      },
      {
          name: "Site Visit Planned",
          id: "Site Visit Planned",
          data: [
              [
                  "v11.0",
                  3.39
              ],
              [
                  "v10.1",
                  0.96
              ],
              [
                  "v10.0",
                  0.36
              ],
              [
                  "v9.1",
                  0.54
              ],
              [
                  "v9.0",
                  0.13
              ],
              [
                  "v5.1",
                  0.2
              ]
          ]
      },
      {
          name: "Site Visit Done",
          id: "Site Visit Done",
          data: [
              [
                  "v16",
                  2.6
              ],
              [
                  "v15",
                  0.92
              ],
              [
                  "v14",
                  0.4
              ],
              [
                  "v13",
                  0.1
              ]
          ]
      },
      {
          name: "Decline",
          id: "Decline",
          data: [
              [
                  "v50.0",
                  0.96
              ],
              [
                  "v49.0",
                  0.82
              ],
              [
                  "v12.1",
                  0.14
              ]
          ]
      }
  ]
}
});


Leadchart = new Chart({
  chart: {
    type: 'column'
  },
  colors: ['grey', '#89cff0', '#B7FFBF', 'red', '#00C301', '#1261A0', '#FF9655', '#FFF263', '#6AF9C4'],
  title: {
    text: 'Lead by Status'
  },
  subtitle: {
    text: ''
  },
  accessibility: {
    announceNewData: {
        enabled: true
    }
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
        text: 'Leads'
    }
  
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true,
            format: '{point.y:.1f}'
        }
    }
  },
  
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  
  series: [
    {
        name: "Lead",
        colorByPoint: true,
        data: [
            {
                name: "Hot Lead",
                y: 10,
                drilldown: "Hot Lead"
            },
            {
                name: "Warm Lead",
                y: 5,
                drilldown: "Warm Lead"
            },
            {
                name: "Cold Lead",
                y: 7,
                drilldown: "Cold Lead"
            },
            {
                name: "Not Interested",
                y: 5,
                drilldown: "Not Interested"
            },
            {
                name: "Interested",
                y: 4,
                drilldown: "Interested"
            },
            {
                name: "Decline",
                y: 3,
                drilldown: "Decline"
            },
           
        ]
    }
  ],
  drilldown: {
    series: [
        {
            name: "Hot Lead",
            id: "Hot Lead",
            data: [
                [
                    "v65.0",
                    0.1
                ],
                [
                    "v64.0",
                    1.3
                ],
                [
                    "v63.0",
                    53.02
                ],
                [
                    "v62.0",
                    1.4
                ],
                [
                    "v61.0",
                    0.88
                ],
                [
                    "v60.0",
                    0.56
                ],
                [
                    "v59.0",
                    0.45
                ],
                [
                    "v58.0",
                    0.49
                ],
                [
                    "v57.0",
                    0.32
                ],
                [
                    "v56.0",
                    0.29
                ],
                [
                    "v55.0",
                    0.79
                ],
                [
                    "v54.0",
                    0.18
                ],
                [
                    "v51.0",
                    0.13
                ],
                [
                    "v49.0",
                    2.16
                ],
                [
                    "v48.0",
                    0.13
                ],
                [
                    "v47.0",
                    0.11
                ],
                [
                    "v43.0",
                    0.17
                ],
                [
                    "v29.0",
                    0.26
                ]
            ]
        },
        {
            name: "Warm Lead",
            id: "Warm Lead",
            data: [
                [
                    "v58.0",
                    1.02
                ],
                [
                    "v57.0",
                    7.36
                ],
                [
                    "v56.0",
                    0.35
                ],
                [
                    "v55.0",
                    0.11
                ],
                [
                    "v54.0",
                    0.1
                ],
                [
                    "v52.0",
                    0.95
                ],
                [
                    "v51.0",
                    0.15
                ],
                [
                    "v50.0",
                    0.1
                ],
                [
                    "v48.0",
                    0.31
                ],
                [
                    "v47.0",
                    0.12
                ]
            ]
        },
        {
            name: "Cold Lead ",
            id: "Cold Lead ",
            data: [
                [
                    "v11.0",
                    6.2
                ],
                [
                    "v10.0",
                    0.29
                ],
                [
                    "v9.0",
                    0.27
                ],
                [
                    "v8.0",
                    0.47
                ]
            ]
        },
        {
            name: "Not Interested",
            id: "Not Interested",
            data: [
                [
                    "v11.0",
                    3.39
                ],
                [
                    "v10.1",
                    0.96
                ],
                [
                    "v10.0",
                    0.36
                ],
                [
                    "v9.1",
                    0.54
                ],
                [
                    "v9.0",
                    0.13
                ],
                [
                    "v5.1",
                    0.2
                ]
            ]
        },
        {
            name: "Interested",
            id: "Interested",
            data: [
                [
                    "v16",
                    2.6
                ],
                [
                    "v15",
                    0.92
                ],
                [
                    "v14",
                    0.4
                ],
                [
                    "v13",
                    0.1
                ]
            ]
        },
        {
            name: "Decline",
            id: "Decline",
            data: [
                [
                    "v50.0",
                    0.96
                ],
                [
                    "v49.0",
                    0.82
                ],
                [
                    "v12.1",
                    0.14
                ]
            ]
        }
    ]
  }
  });

  salespipelinechart = new Chart({
    chart: {
      type: 'column'
    },
    colors: ['#6AF9C4', '#50B432', '#ED561B', '#DDDF00', 'pink', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
    title: {
      text: 'Sales Pipe Line'
    },
    subtitle: {
      text: ''
    },
    accessibility: {
      announceNewData: {
          enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
          text: 'Sales pipe line'
      }
    
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
          borderWidth: 0,
          dataLabels: {
              enabled: true,
              format: '{point.y:.1f}'
          }
      }
    },
    
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    
    series: [
      {
          name: "Opportunities",
          colorByPoint: true,
          data: [
              {
                  name: "Deal Closed",
                  y: 10,
                  drilldown: "Deal Closed"
              },
              {
                  name: "Need Review",
                  y: 5,
                  drilldown: "Need Review"
              },
              {
                  name: "Negotiated",
                  y: 7,
                  drilldown: "Negotiated"
              },
              {
                  name: "Site Visit Planned",
                  y: 5,
                  drilldown: "Site Visit Planned"
              },
              {
                  name: "Site Visit Done",
                  y: 4,
                  drilldown: "Site Visit Done"
              },
              {
                  name: "Decline",
                  y: 3,
                  drilldown: "Decline"
              },
              {
                  name: "Hold",
                  y: 7,
                  drilldown: 'Hold'
              }
          ]
      }
    ],
    drilldown: {
      series: [
          {
              name: "Deal Closed",
              id: "Deal Closed",
              data: [
                  [
                      "v65.0",
                      5
                  ],
                  [
                      "v64.0",
                      1.3
                  ],
                  [
                      "v63.0",
                      53.02
                  ],
                  [
                      "v62.0",
                      1.4
                  ],
                  [
                      "v61.0",
                      0.88
                  ],
                  [
                      "v60.0",
                      0.56
                  ],
                  [
                      "v59.0",
                      0.45
                  ],
                  [
                      "v58.0",
                      0.49
                  ],
                  [
                      "v57.0",
                      0.32
                  ],
                  [
                      "v56.0",
                      0.29
                  ],
                  [
                      "v55.0",
                      0.79
                  ],
                  [
                      "v54.0",
                      0.18
                  ],
                  [
                      "v51.0",
                      0.13
                  ],
                  [
                      "v49.0",
                      2.16
                  ],
                  [
                      "v48.0",
                      0.13
                  ],
                  [
                      "v47.0",
                      0.11
                  ],
                  [
                      "v43.0",
                      0.17
                  ],
                  [
                      "v29.0",
                      0.26
                  ]
              ]
              
          },
          {
              name: "Need Review",
              id: "Need Review",
              data: [
                  [
                      "v58.0",
                      1.02
                  ],
                  [
                      "v57.0",
                      7.36
                  ],
                  [
                      "v56.0",
                      0.35
                  ],
                  [
                      "v55.0",
                      0.11
                  ],
                  [
                      "v54.0",
                      0.1
                  ],
                  [
                      "v52.0",
                      0.95
                  ],
                  [
                      "v51.0",
                      0.15
                  ],
                  [
                      "v50.0",
                      0.1
                  ],
                  [
                      "v48.0",
                      0.31
                  ],
                  [
                      "v47.0",
                      0.12
                  ]
              ]
          },
          {
              name: "Negotiated ",
              id: "Negotiated ",
              data: [
                  [
                      "v11.0",
                      6.2
                  ],
                  [
                      "v10.0",
                      0.29
                  ],
                  [
                      "v9.0",
                      0.27
                  ],
                  [
                      "v8.0",
                      0.47
                  ]
              ]
          },
          {
              name: "Site Visit Planned",
              id: "Site Visit Planned",
              data: [
                  [
                      "v11.0",
                      3.39
                  ],
                  [
                      "v10.1",
                      0.96
                  ],
                  [
                      "v10.0",
                      0.36
                  ],
                  [
                      "v9.1",
                      0.54
                  ],
                  [
                      "v9.0",
                      0.13
                  ],
                  [
                      "v5.1",
                      0.2
                  ]
              ]
          },
          {
              name: "Site Visit Done",
              id: "Site Visit Done",
              data: [
                  [
                      "v16",
                      2.6
                  ],
                  [
                      "v15",
                      0.92
                  ],
                  [
                      "v14",
                      0.4
                  ],
                  [
                      "v13",
                      0.1
                  ]
              ]
          },
          {
              name: "Decline",
              id: "Decline",
              data: [
                  [
                      "v50.0",
                      0.96
                  ],
                  [
                      "v49.0",
                      0.82
                  ],
                  [
                      "v12.1",
                      0.14
                  ]
              ]
          }
      ]
    }
    });

piChart = new Chart({
chart: {
  plotBackgroundColor: null,
  plotBorderWidth: null,
  plotShadow: false,
  type: 'pie'
},
title: {
  text: 'Leads Status, December,2019'
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

prospectchart = new Chart({
chart: {
    type: 'line'
},
title: {
    text: 'Prospects Vs Deals'
},
// subtitle: {
//     text: 'Source: WorldClimate.com'
// },
xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
},
yAxis: {
    title: {
        text: 'Number'
    }
},
plotOptions: {
    line: {
        dataLabels: {
            enabled: true
        },
        enableMouseTracking: false
    }
},
series: [{
    name: 'Prospects',
    data: [7, 8, 9, 5, 8, 5,2, 6, 3, 0, 9, 3]
}, {
    name: 'Deals',
    data: [5, 4, 5, 2, 3, 3, 0,2, 2, 0, 3, 1]
}]
});


}





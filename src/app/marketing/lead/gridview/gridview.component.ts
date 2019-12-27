import { Component, OnInit } from '@angular/core';
import {AddleadComponent} from './addlead/addlead.component'
import { MatDialog} from '@angular/material'
import {AddremarksmodalComponent} from './addremarksmodal/addremarksmodal.component'

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss']
})
export class GridviewComponent implements OnInit {
 tableList:any;
 status=['Active','Inactive']
 filterToggle: boolean;
 toggleFilter() {
     this.filterToggle = !this.filterToggle;
   }
 public popoverTitle: string = '<b>Confirm Delete</b>';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  public popoverleadTitle:string ='<b>Confirm Convert</b>'
  public popoverleadMessage:string='Are you sure you want to convert this lead to prospect ?'

  constructor(public dialog:MatDialog) { }

      ngOnInit() {
        this.tableList =[
          {name:'sai',mobileNumber:'9889989845',email:'sai@1232',campaignmode:'offline',campaigntype:'SMS',notes:'Add',nextdate:'-',country:'India',State:'Telangana',city:'Hyderabad',user:'Suresh',project:'Lodha Group', status: true},
          {name:'Praveen',mobileNumber:'9889978845',email:'praveen@123',campaignmode:'offline',campaigntype:'calling',notes:'View',nextdate:'-',country:'India',State:'Maharashtra',city:'Mumbai',user:'om',project:'Lion Contractors',status:false},
          {name:'Prasanth',mobileNumber:'7589989845',email:'prasanth@132',campaignmode:'online',campaigntype:'Facebook',notes:'Add',nextdate:'-',country:'India',State:'Maharashtra',city:'Pune',user:'Anand',project:'Skyline Contractors',status: true},
          {name:'Pradeep',mobileNumber:'6289989845',email:'Pradeep@1232',campaignmode:'online',campaigntype:'WatsApp',notes:'View',nextdate:'-',country:'India',State:'karnataka',city:'Bengaluru',user:'Mohan',project:'National Group',status: false},
        ]

        
      }

  public openleadDialog(id){
    
    let dialogRef = this.dialog.open(AddleadComponent,{
      data:id,
      height:'auto',
      width:'700px',
      autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data=>{

    });
    
  }

  public openRemarksModal(id){
    let dialogRef = this.dialog.open(AddremarksmodalComponent,{
      data:id,
      height:'auto',
      width:'700px',
      autoFocus:true
    });
    dialogRef.afterClosed().subscribe(data=>{

    });
  }

}

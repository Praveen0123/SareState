import { Component, OnInit } from '@angular/core';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-offlinecampain',
  templateUrl: './offlinecampain.component.html',
  styleUrls: ['./offlinecampain.component.scss']
})
export class OfflinecampainComponent implements OnInit {
  tableList: any;

  filterToggle: boolean;
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  status = ["Active", "Inactive"];
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

    this.tableList = [
      { cmpName: 'campaign 1', cmptype: 'SMS', product: 'Lodha Group', Assigned: '5', startdate: '	05/12/2019', enddate: '	25/01/2020' ,status:true},
      { cmpName: 'campaign 2', cmptype: 'Calling', product: 'Lion Heart Contractors', Assigned: '1', startdate: '10/12/2019', enddate: '5/02/2020' ,status:false},
      { cmpName: 'campaign 3', cmptype: 'SMS', product: 'Skyline Contractors ', Assigned: '3', startdate: '15/12/2019', enddate: '15/02/2020' ,status:true},
      { cmpName: 'campaign 4', cmptype: 'SMS', product: 'National Construction Group', Assigned: '2', startdate: '25/12/2019', enddate: '20/02/2020',status:false },
      { cmpName: 'campaign 5', cmptype: 'others', product: 'River’s Edge Construction', Assigned: '4', startdate: '5/1/2020', enddate: '25/02/2020',status:true },
    ]
  }

  public openofflineDialog(id) {
    let dialogRef = this.dialog.open(AddCampaignComponent, {
      data: id,
      height: 'auto',
      width: '700px',
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }



}

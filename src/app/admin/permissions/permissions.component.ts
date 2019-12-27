import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AddPermissionComponent } from './add-permission/add-permission.component';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  tableList: any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;
toggleFilter() {
  this.filterToggle = !this.filterToggle;
}
public dateTime2: Date;
public dateTime3: Date;
status = ["Active","Incative"];
stepsOptionSelected: any;
onStepsOptionsSelected(event){

}

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , permissionLevel:"Customers" , permissions:"0/90" , usersAssigned:5, status:false },
    {id:2 , permissionLevel:"Realtor" , permissions:"0/90" , usersAssigned:30, status:true },
    {id:3 , permissionLevel:"Broker" , permissions:"0/90" , usersAssigned:15, status:true },
    {id:4 , permissionLevel:"Builder" , permissions:"0/90" , usersAssigned:52, status:true },
    // {id:5 , permissionLevel:"Front Desk" , permissions:"130/136" , usersAssigned:12, status:false }       
    ]
}


public openPermissionDialog(id) {
let dialogRef = this.dialog.open(AddPermissionComponent, {
    data: id,
    height: 'auto',
    width: '460px',
    autoFocus:false
});
dialogRef.afterClosed().subscribe(data => {
});
}

deletePermissionLevel(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}

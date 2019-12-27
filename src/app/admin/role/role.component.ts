import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import {AddRoleComponent} from './add-role/add-role.component'

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  providers: [AlertService]
})
export class RoleComponent implements OnInit {

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
status = ["Active","Incative"];
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog,
    private alertService: AlertService) {
    this.settings = this.appSettings.settings;
}

  ngOnInit() {

    this.tableList = [  
      {id:1 ,role:'Broker' ,attorney:"Fabrice Vanegas" , lookup:"Physician" , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true },
      {id:2 ,role:'Builder' , attorney:"Stephen McGill" , lookup:"Attorney" , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true },
      {id:3 ,role:'Realtor Agent' , attorney:"Otto Rieder" , lookup:"Referring Physician" , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false },
      {id:4 ,role:'Relationship Manager' , attorney:"Joe Deu-Ngoc" , lookup:"Frondesk staff" , email:"Deu-Ngoc@gmail.com" , phone:"657-2506-0096", status:true },
   
      ]
  }
  public openRoleDialog(id) {
    let dialogRef = this.dialog.open(AddRoleComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
deleterole(){
  this.alertService.createAlert('Successfully deleted.', 1);
  }
}

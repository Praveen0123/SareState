import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../shared/services/alert.service';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import {AddKanbanComponent} from './add-kanban/add-kanban.component'

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {
  tableList:any;

  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;
// toggleFilter() {
//   this.filterToggle = !this.filterToggle;
// }
status = ["Active","Incative"];
  public settings: Settings;

  constructor(public appSettings: AppSettings,public dialog:MatDialog,private alertService:AlertService) {
    this.settings =  this.appSettings.settings
   }

  ngOnInit() {
    this.tableList = [  
      {id:1 ,stepName:'Allocated',role:'Broker' , email:"fabrice@gmail.com" , phone:"408-444-0058", status:true },
      {id:2 ,stepName:'Initiated',role:'Builder' , email:"Stephen@gmail.com" , phone:"127-256-5528", status:true },
      {id:3 ,stepName:'Interested',role:'Realtor Agent' , email:"Rieder@gmail.com" , phone:"647-210-9935", status:false },
      {id:4 ,stepName:'Property Registration',role:'Relationship Manager' ,  email:"Deu-Ngoc@gmail.com" , phone:"657-2506-0096", status:true },
      {id:5 ,stepName:'Closed',role:'Relationship Manager' , status:false },
   
      ]
  }
  public openkanbanDialog(id) {
    let dialogRef = this.dialog.open(AddKanbanComponent, {
        data: id,
        height: 'auto',
        width: '600px',
        autoFocus:false
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}
deletekanban(){
  this.alertService.createAlert('Successfully deleted.', 1);
  }
}

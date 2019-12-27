import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { AddIncomingOrderComponent } from './add-incoming-order/add-incoming-order.component';
import { ProfileAndInsuranceDialogComponent } from './profile-and-insurance-dialog/profile-and-insurance-dialog.component'


@Component({
  selector: 'app-incoming-order-queue',
  templateUrl: './incoming-order-queue.component.html',
  styleUrls: ['./incoming-order-queue.component.scss'],
})
export class IncomingOrderQueueComponent implements OnInit {
  
  tableList: any;
  
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;
  
  filterToggle: boolean;
  
  public searchText: string;
  public page: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings,
    public dialog: MatDialog) {
      this.settings = this.appSettings.settings;
    }

    
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }
  public dateTime2: Date;
  public dateTime3: Date;
  referringOptions = ["Stephen McGill","Otto Rieder","Joe Deu-Ngoc","Chris Soles","Brad Kewalramani","Michael Persaud","Habib Kharsa"];
  stepsOptionSelected: any;
  onStepsOptionsSelected(event){
  
  }

  
    
    ngOnInit() {
      this.filterToggle = false;
      this.tableList = [  
        {id:1 , firstName:"Fabrice" , normal:5 , faxNumber:"+1-403-444-5207" , eFaxNumber:"1202584" , lastName:"Vanegas", dob:"02/05/1964", orderingPhysician:"David", receivedDate:"03/03/2019"},
        {id:2 , firstName:"Stephen" , normal:6 , faxNumber:"+1-780-142-5207" , eFaxNumber:"3021478" , lastName:"McGill", dob:"09/07/1985", orderingPhysician:"Stokes", receivedDate:"21/04/2019"},
        {id:3 , firstName:"Otto" , normal:6 , faxNumber:"+1-604-0257-3614" , eFaxNumber:"2015478" , lastName:"Rieder", dob:"25/11/2010", orderingPhysician:"Morgan", receivedDate:"29/04/2019"},
        {id:4 , firstName:"Joe" , normal:5 , faxNumber:"+1-403-205-5691" , eFaxNumber:"2015697" , lastName:"Deu-Ngoc", dob:"17/09/1966", orderingPhysician:"Steven", receivedDate:"17/05/2019"},
        {id:5 , firstName:"Chris" , normal:5 , faxNumber:"+1-403-293-9696" , eFaxNumber:"6365471" , lastName:"Soles", dob:"31/01/2000", orderingPhysician:"Liam Plunkeet", receivedDate:"22/05/2019"}       
      ]
    }
    
    
    public openPatientDialog(id) {
      let dialogRef = this.dialog.open(AddIncomingOrderComponent, {
        data: id,
        height: 'auto',
        width: '700px',
        autoFocus: false,
        
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }

    public openInsuranceDialog(id) {
      let dialogRef = this.dialog.open(ProfileAndInsuranceDialogComponent, {
        data: id,
        height: 'auto',
        width: '700px',
        autoFocus: false
      });
      dialogRef.afterClosed().subscribe(data => {
      });
    }
    
    deletePatientOrder(){
      //this.alertService.createAlert('Successfully deleted.', 1);
    }
    
    
  }
  
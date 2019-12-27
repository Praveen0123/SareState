import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-addremarkmodal',
  templateUrl: './addremarkmodal.component.html',
  styleUrls: ['./addremarkmodal.component.scss']
})
export class AddremarkmodalComponent implements OnInit {

  constructor(public alertService:AlertService,public dialogRef:MatDialogRef<AddremarkmodalComponent>,@Inject(MAT_DIALOG_DATA) public remark:any) { }

  ngOnInit() {
  }

  
  close(): void {
    this.dialogRef.close();
  }

  saveLead() {
    this.alertService.createAlert('Remark added successfully.', 1);
    this.dialogRef.close();
  }

}

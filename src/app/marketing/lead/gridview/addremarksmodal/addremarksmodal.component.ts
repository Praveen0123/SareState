import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-addremarksmodal',
  templateUrl: './addremarksmodal.component.html',
  styleUrls: ['./addremarksmodal.component.scss']
})
export class AddremarksmodalComponent implements OnInit {

  constructor(public alertService:AlertService,public dialogRef:MatDialogRef<AddremarksmodalComponent>,@Inject(MAT_DIALOG_DATA) public remark:any) { }

  ngOnInit() {
  }

  
  close(): void {
    this.dialogRef.close();
  }

  saveremark() {
    this.alertService.createAlert('Remark added successfully.', 1);
    this.dialogRef.close();
  }

}

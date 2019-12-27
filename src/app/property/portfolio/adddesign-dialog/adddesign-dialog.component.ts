import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-adddesign-dialog',
  templateUrl: './adddesign-dialog.component.html',
  styleUrls: ['./adddesign-dialog.component.scss']
})
export class AdddesignDialogComponent implements OnInit {

  constructor(public alertService:AlertService,public dialogRef:MatDialogRef<AdddesignDialogComponent>,@Inject(MAT_DIALOG_DATA) public remark:any) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

}

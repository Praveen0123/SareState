import { Component, OnInit, Inject } from '@angular/core';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-design-dialog',
  templateUrl: './add-design-dialog.component.html',
  styleUrls: ['./add-design-dialog.component.scss']
})
export class AddDesignDialogComponent implements OnInit {

  constructor(public alertService:AlertService,public dialogRef:MatDialogRef<AddDesignDialogComponent>,@Inject(MAT_DIALOG_DATA) public remark:any) { }

  ngOnInit() {

  }

  close(): void {
    this.dialogRef.close();
  }

}

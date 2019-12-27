import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-design-dialog',
  templateUrl: './add-design-dialog.component.html',
  styleUrls: ['./add-design-dialog.component.scss']
})
export class AddDesignDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddDesignDialogComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close()
  }


}

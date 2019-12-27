import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-addrealtors-dialog',
  templateUrl: './addrealtors-dialog.component.html',
  styleUrls: ['./addrealtors-dialog.component.scss']
})
export class AddrealtorsDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddrealtorsDialogComponent>) { }

  ngOnInit() {
  }

  close():void{
    this.dialogRef.close()
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-designdialog',
  templateUrl: './add-designdialog.component.html',
  styleUrls: ['./add-designdialog.component.scss']
})
export class AddDesigndialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddDesigndialogComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close()
  }

}

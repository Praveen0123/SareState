import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddDesignDialogComponent} from './add-design-dialog/add-design-dialog.component'

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
public openDesignDialog(id){
  let dialogRef =this.dialog.open(AddDesignDialogComponent,{
    data:id,
    height:'auto',
    width:'700px',
    autoFocus:true
  });
  dialogRef.afterClosed().subscribe(data=>{

  });
}
}

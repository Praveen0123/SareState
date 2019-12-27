import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddDesigndialogComponent} from './add-designdialog/add-designdialog.component';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.scss']
})
export class BrokerComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  public openDesignDialog(id){
    let dialogRef =this.dialog.open(AddDesigndialogComponent,{
      data:id,
      height:'auto',
      width:'700px',
      autoFocus:true
    });
    dialogRef.afterClosed().subscribe(data=>{

    });
  }

}

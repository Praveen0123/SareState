import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AdddesignDialogComponent} from './adddesign-dialog/adddesign-dialog.component'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  public openDesignDialog(id){
    let dialogRef = this.dialog.open(AdddesignDialogComponent,{
      data:id,
      height:'auto',
      width:'700px',
      autoFocus:true
    });
    dialogRef.afterClosed().subscribe(data=>{

    });
  }

}

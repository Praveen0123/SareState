import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddrealtorsDialogComponent} from './addrealtors-dialog/addrealtors-dialog.component';


@Component({
  selector: 'app-realtors',
  templateUrl: './realtors.component.html',
  styleUrls: ['./realtors.component.scss']
})
export class RealtorsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
public openDesignDialog(id){
  let dialogRef =this.dialog.open(AddrealtorsDialogComponent,{
    data:id,
    height:'auto',
    width:'700px',
    autoFocus:true
  });
  dialogRef.afterClosed().subscribe(data=>{

  });
}
}

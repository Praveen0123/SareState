import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddDesignDialogComponent} from './add-design-dialog/add-design-dialog.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
   public openDesignDialog(id){
     let dialogRef = this.dialog.open(AddDesignDialogComponent,{
       data:id,
       height:'auto',
       width:'700px',
       autoFocus:true
     });
     dialogRef.afterClosed().subscribe(data=>{

     });
   }

}

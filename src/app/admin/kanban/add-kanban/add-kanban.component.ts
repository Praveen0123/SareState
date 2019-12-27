import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-add-kanban',
  templateUrl: './add-kanban.component.html',
  styleUrls: ['./add-kanban.component.scss']
})
export class AddKanbanComponent implements OnInit {
  addkanbanForm:FormGroup;

  constructor(public fb:FormBuilder, public dialogRef:MatDialogRef<AddKanbanComponent>,@Inject(MAT_DIALOG_DATA) public kanban:any,private alertService:AlertService) {
    this.createkanbanForm()
   }

   get Step() { return this.addkanbanForm.get('Step'); }
   get selectStatus() { return this.addkanbanForm.get('selectStatus'); }
  
   createkanbanForm() {
    this.addkanbanForm = this.fb.group({
      Step:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      selectStatus:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  })
  }
  ngOnInit() {
  }
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  savekanban() {
    // console.log(this.addRoleForm.value.userType);
    this.alertService.createAlert('User added successfully', 1);
    this.dialogRef.close();
  }
  close(): void {
    this.dialogRef.close();
  }

}

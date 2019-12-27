import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
// import { MustMatch } from '../../../shared/services/mustMatch';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  addRoleForm:FormGroup;

  constructor(public fb:FormBuilder,public dialogRef:MatDialogRef<AddRoleComponent>,@Inject(MAT_DIALOG_DATA) public role:any, private alertService:AlertService) {
    this.createRoleForm()
   }

  ngOnInit() {
  }

  get Role() { return this.addRoleForm.get('Role'); }
  get selectStatus() { return this.addRoleForm.get('selectStatus'); }

  createRoleForm() {
    this.addRoleForm = this.fb.group({
      Role:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      selectStatus:new FormControl('',[Validators.required,Validators.maxLength(100)]),

  })
  }
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  saverole() {
    // console.log(this.addRoleForm.value.userType);
    this.alertService.createAlert('User added successfully', 1);
    this.dialogRef.close();
  }
  close(): void {
    this.dialogRef.close();
  }

}

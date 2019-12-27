import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.scss']
})
export class AddPermissionComponent implements OnInit {

  addPermissionForm:FormGroup;

  constructor(public alertService: AlertService,public fb:FormBuilder,public dialogRef: MatDialogRef<AddPermissionComponent>,@Inject(MAT_DIALOG_DATA) public attorney: any) {
    this.createPermissionForm();
   }

  ngOnInit() {
  }

  get permissionLevel() { return this.addPermissionForm.get('permissionLevel'); }

  get status() { return this.addPermissionForm.get('status'); }

  createPermissionForm() {
    this.addPermissionForm = this.fb.group({
      permissionLevel : new FormControl('',[Validators.required,Validators.maxLength(50),this.noWhiteSpaceValidator]),
      status : new FormControl('',[Validators.required, Validators.maxLength(10)]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  saveAttorney() {
    this.alertService.createAlert('Permision level added successfully', 1);
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }

}

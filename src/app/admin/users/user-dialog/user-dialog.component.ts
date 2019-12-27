import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from '../../../shared/services/alert.service';
import { MustMatch } from '../../../shared/services/mustMatch';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  providers: [AlertService]
})
export class UserDialogComponent implements OnInit {
  
  addUserForm:FormGroup;
  isOneLetter = false;
  isOneCapitalLetter = false;
  isOneNumber = false;
  isOneSpecialCaharacter = false;
  isMinLength = false;
  isValidate = false;
  
  constructor(public fb:FormBuilder,public dialogRef: MatDialogRef<UserDialogComponent>,@Inject(MAT_DIALOG_DATA) public user: number, private alertService: AlertService) { 
    this.createUserForm();
  }
  
  ngOnInit() {
    
  }
  
  get businessCenter() { return this.addUserForm.get('businessCenter'); }
  
  get userName() { return this.addUserForm.get('userName'); }
  
  get uniqueId() { return this.addUserForm.get('uniqueId'); }
  get addphone() { return this.addUserForm.get('addphone'); }
  
  get userType() { return this.addUserForm.get('userType'); }
  
  get selectStatus() { return this.addUserForm.get('selectStatus'); }
  
  get attorney() { return this.addUserForm.get('attorney'); }
  
  get addPassword() {return this.addUserForm.get('addPassword'); }
  
  get addConfirmPassword() {return this.addUserForm.get('addConfirmPassword'); }
  get addEmail() { return this.addUserForm.get('addEmail'); }
  
  onKeyPress(e) {
    var pswd = e.value;
    //validate the length
    if (pswd.length < 8) {
      this.isMinLength = false;
    } else {
      this.isMinLength = true;
    }
    
    //validate letter
    if (pswd.match(/[A-z]/)) {
      if (pswd != '_') {
        this.isOneLetter = true;
      } else {
        this.isOneLetter = false;
      }
    } else {
      this.isOneLetter = false;
    }
    
    //validate uppercase letter
    if (pswd.match(/[A-Z]/)) {
      this.isOneCapitalLetter = true;
    } else {
      this.isOneCapitalLetter = false;
    }
    
    //validate special character
    if (pswd.match(/[!@#\$%\^&\_\+\<\>\.\,\=\:\;\'\?\(\)\[\]\\\/\|\*{}-]/)) {
      this.isOneSpecialCaharacter = true;
    } else {
      this.isOneSpecialCaharacter = false;
    }
    
    //validate number
    if (pswd.match(/\d/)) {
      this.isOneNumber = true;
    } else {
      this.isOneNumber = false;
    }
    
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  createUserForm() {
    this.addUserForm = this.fb.group({
      businessCenter:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      userName:new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      uniqueId:new FormControl('',[Validators.required,Validators.maxLength(100),this.noWhiteSpaceValidator]),
      userType:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      selectStatus:new FormControl('',[Validators.required,Validators.maxLength(100)]),
      attorney:new FormControl(''),
      addphone: new FormControl('',[Validators.required, Validators.maxLength(50), this.noWhiteSpaceValidator]),
      addEmail: new FormControl('',[Validators.required, Validators.maxLength(50), this.noWhiteSpaceValidator]),
      addPassword : new FormControl('', [Validators.required]),
      addConfirmPassword : new FormControl('', [Validators.required]),
    }, {
      validator: MustMatch('addPassword', 'addConfirmPassword')
  })
  }
  
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  
  onlyNumbers(event) {
    var k;
    k=event.charCode;
    return ((k > 47 && k < 58));
    }
    
  saveUser() {
    console.log(this.addUserForm.value.userType);
    this.alertService.createAlert('User added successfully', 1);
    this.dialogRef.close();
  }
  
}

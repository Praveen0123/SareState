import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import {AlertService} from '../../../../shared/services/alert.service'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-addlead',
  templateUrl: './addlead.component.html',
  styleUrls: ['./addlead.component.scss']
})
export class AddleadComponent implements OnInit {
 
  addBasicDetails:FormGroup
  addDemographicDetails:FormGroup;


  constructor(public alertService:AlertService,public fb:FormBuilder ,public dialogRef:MatDialogRef<AddleadComponent>,@Inject(MAT_DIALOG_DATA) public lead:any) {
    this.addleadDetailsForm();
    this.addleadDemographicForm();
   }

  ngOnInit() {
  }

  get Name() {return this.addBasicDetails.get('Name'); }
  get mobNumb(){return this.addBasicDetails.get('mobNumb');}
  get email(){return this.addBasicDetails.get('email');}
  get Assigned() {return this.addBasicDetails.get('Assigned'); }
  get cmptype() {return this.addBasicDetails.get('cmptype');}
  get selectStatus() {return this.addBasicDetails.get('selectStatus');}
  get addCust(){return this.addBasicDetails.get('addCust');}
  get Project(){return this.addBasicDetails.get('Project');}
  get startDate(){return this.addBasicDetails.get('startDate');}

  get address() {return this.addDemographicDetails.get('address');}
  get postal() {return this.addDemographicDetails.get('postal');}
  get state(){return this.addDemographicDetails.get('state');}
  get country(){return this.addDemographicDetails.get('country');}
  get city(){return this.addDemographicDetails.get('city');}
  get user() {return this.addBasicDetails.get('user');}


  addleadDetailsForm(){
      this.addBasicDetails =this.fb.group({
        Name:new FormControl('',[Validators.required]),
        mobNumb:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required]),
        Assigned:new FormControl('',[Validators.required]),
        selectStatus: new FormControl('',[Validators.required, ]),
        cmptype: new FormControl('',[Validators.required, ]),
        addCust: new FormControl('',[Validators.required,]),
        Project: new FormControl('',[Validators.required,  ]),
        user: new FormControl('',[Validators.required]),
      

      })
  }

  addleadDemographicForm(){
    this.addDemographicDetails = this.fb.group({
      address:new FormControl('',[Validators.required]),
      postal:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required, ]),
     
    })
  }
  onlyNumber(event){
    var x;
    x=event.charCode;
    return (x>47 && x<58);

  }
  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  savelead() {
    this.alertService.createAlert('Campaign added successfully.', 1);
    this.dialogRef.close();
  }

  close():void{
    this.dialogRef.close()
  }


}

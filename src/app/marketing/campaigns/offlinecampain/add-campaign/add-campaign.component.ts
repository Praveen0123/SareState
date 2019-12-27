import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';

import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.scss']
})
export class AddCampaignComponent implements OnInit {
  public dateTime1: Date;
  public dateTime2: Date;
 
  addBasicDetails: FormGroup;
  addActualDetails: FormGroup;

  currDate = new Date();
  
  public minDate = new Date(this.currDate.getFullYear(), this.currDate.getMonth(), this.currDate.getDate());
  // public phoneNumberMask = ['+','1', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(public adminService:AdminService,public alertService:AlertService,public fb:FormBuilder,public dialogRef:MatDialogRef<AddCampaignComponent>,@Inject(MAT_DIALOG_DATA) public offline:any) {
    this.addCampaignDetailForm();
    this.addActualexpectationForm();
   }

  ngOnInit() {
  }


  get cmpName() { return this.addBasicDetails.get('cmpName'); }

  get cmptype() { return this.addBasicDetails.get('cmptype'); }

  get Product() { return this.addBasicDetails.get('Product'); }

  get Assigned() { return this.addBasicDetails.get('Assigned'); }

  get startdate() { return this.addBasicDetails.get('startdate'); }

  get addEnd() { return this.addBasicDetails.get('addEnd');}
  
  get selectStatus(){return this.addBasicDetails.get('selectStatus');}
  
  get bgcost() {return this.addActualDetails.get('bgcost');}

  get actualcost() {return this.addActualDetails.get('actualcost');}

  get expresponse() {return this.addActualDetails.get('expresponse');}

  get expRevenue() {return this.addActualDetails.get('expRevenue');}

  get expSales() {return this.addActualDetails.get('expSales');}

  get actualSales() {return this.addActualDetails.get('actualSales');}

  get expROI() {return this.addActualDetails.get('expROI');}

  get actualROI() {return this.addActualDetails.get('actualROI');}

 

  addCampaignDetailForm() {
    this.addBasicDetails = this.fb.group({
      cmpName: new FormControl('',[Validators.required, Validators.maxLength(50), this.noWhiteSpaceValidator]),
      cmptype: new FormControl('',[Validators.required, ]),
      Product: new FormControl('',[Validators.required,]),
      Assigned: new FormControl('',[Validators.required,  ]),
      startdate: new FormControl('',[Validators.required, ]),
      // addDob: new FormControl('',[Validators.maxLength(50)]),
      addEnd: new FormControl('',[Validators.required,]),
      selectStatus: new FormControl('',[Validators.required,]),
    
    })
  }

  addActualexpectationForm() {
    this.addActualDetails = this.fb.group({
      bgcost: new FormControl('',[Validators.required, ]),
      actualcost: new FormControl('',[Validators.required, ]),
      expresponse: new FormControl('',[Validators.required,]),
      expRevenue: new FormControl('',[Validators.required,  ]),
      expSales: new FormControl('',[Validators.required, ]),
      actualSales: new FormControl('',[Validators.required,]),
      expROI: new FormControl('',[Validators.required, ]),
      actualROI: new FormControl('',[Validators.required, ]),
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  saveoffline() {
    this.alertService.createAlert('Campaign added successfully.', 1);
    this.dialogRef.close();
  }

  onlyNumber(event){
    var x;
    x=event.charCode;
    return ((x>47 && x<58));

  }


}

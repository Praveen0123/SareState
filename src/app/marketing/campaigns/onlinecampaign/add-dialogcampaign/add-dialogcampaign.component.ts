import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert.service';


@Component({
  selector: 'app-add-dialogcampaign',
  templateUrl: './add-dialogcampaign.component.html',
  styleUrls: ['./add-dialogcampaign.component.scss']
})
export class AddDialogcampaignComponent implements OnInit {
  addBasicDetails: FormGroup;
  addActualDetails: FormGroup;


  constructor(public alertService:AlertService,public fb:FormBuilder,public dialogRef:MatDialogRef<AddDialogcampaignComponent>,@Inject(MAT_DIALOG_DATA) public online:any) {
    this.addCampaignDetailForm();
    this.addActualexpectationForm();
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
       cmpName: new FormControl('',[Validators.required, ]),
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
 

  ngOnInit() {
  }


  close(): void {
    this.dialogRef.close();
  }

  noWhiteSpaceValidator(control:FormControl) {
    let isWhiteSpace = (control.value || '').trim().length === 0;
    let isValid=!isWhiteSpace;
    return isValid ? null : {'whitespace':true};
  }
  saveonline() {
    this.alertService.createAlert('Campaign added successfully.', 1);
    this.dialogRef.close();
  }

  onlyNumber(event){
    var x;
    x=event.charCode;
    return ((x>47 && x<58));

  }
}

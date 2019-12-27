import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-prospectdashboard',
  templateUrl: './prospectdashboard.component.html',
  styleUrls: ['./prospectdashboard.component.scss']
})
export class ProspectdashboardComponent implements OnInit {

  constructor(private location:Location,public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  checkUrl(type) {
    if(this.router.url != '/sare/marketing/prosprctsDashboard/information' && this.router.url != '/sare/marketing/prosprctsDashboard/textNotes' && this.router.url != '/sare/marketing/prosprctsDashboard/callnotes' && this.router.url != '/sare/marketing/prosprctsDashboard/email' && this.router.url != '/sapphire/patients/patientdashboard/clinicalNote/DrGoel' && this.router.url != '/sapphire/patients/patientdashboard/combinedNotes/schedule' && this.router.url != '/sapphire/patients/patientdashboard/combinedNotes/clinical' && this.router.url != '/sapphire/patients/patientdashboard/combinedNotes/billing' && this.router.url != '/sapphire/patients/patientdashboard/mailbox' && this.router.url != '/sapphire/patients/patientdashboard/documents'  && this.router.url != '/sapphire/patients/patientdashboard/clinicalNote/handp' && this.router.url != '/sapphire/patients/patientdashboard/clinicalNote/soap' && this.router.url != '/sapphire/patients/patientdashboard/clinicalNote/additional' && this.router.url != '/sapphire/patients/patientdashboard/cases/clinicalObservations'  && this.router.url != '/sapphire/patients/patientdashboard/test' && this.router.url != '/sapphire/patients/patientdashboard/docx' && this.router.url != '/sapphire/patients/patientdashboard/prescreening' && this.router.url != '/sapphire/patients/patientdashboard/clinicalnotes' && this.router.url != '/sapphire/patients/patientdashboard/testnotes' && this.router.url != '/sapphire/patients/patientdashboard/activitylog' && this.router.url != '/sapphire/patients/patientdashboard/scheduledappointments' && this.router.url != '/sapphire/patients/patientdashboard/dashboardclaims'  && this.router.url != '/sapphire/patients/patientdashboard/dashboardnotes') {
        if(type == 'class')
            return 'active-prosp-link';
        else    
            return true;
    }
  }

  goBack() {
    this.location.back();
  }


}

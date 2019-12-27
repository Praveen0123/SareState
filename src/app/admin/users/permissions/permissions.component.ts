import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
    selector: 'app-permissions',
    templateUrl: './permissions.component.html',
    styleUrls: ['./permissions.component.scss'],
    providers: [AlertService]
  })
  export class PermissionsComponent implements OnInit {
      constructor(private location:Location, private alertService: AlertService) {}
      public screens = [{"name":"Dashboard","value1":"true","value2":"false","value3":"true","value4":"true"},{"name":"Incoming Order Queue","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Add New Order","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Manage Patient Orders","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Manage Patient List","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Manage Schedules","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Confirm Appointments","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Assign Physicians","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Visit Records","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Text Log","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Email Log","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Create Claims","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Manage Claims","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Ageing Analysis","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Incoming Orders","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Patient Status","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Lost Sales Report","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Billing Status","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Incoming Referral","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Outgoing Referral","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Users & Permissions","value1":true,"value2":true,"value3":true,"value4":true},{"name":"CPT & ICD Codes","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Attorneys","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Referring Physicians","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Internal Physicans","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Availability Calendar","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Manage Timings","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Text Templates","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Email Templates","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Event Log","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Settings","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Pharmacies","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Chiropractors","value1":true,"value2":true,"value3":true,"value4":true},{"name":"Imaging Partners","value1":true,"value2":true,"value3":true,"value4":true},];
      ngOnInit() {

      }
      goBack() {
        this.location.back();
      }

      savePermissions() {
        this.alertService.createAlert('Successfully Saved.', 1);
      }
  }
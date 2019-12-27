import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { MenuService } from '../menu.service';
import { MatMenuTrigger, MatDialog } from '@angular/material';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ MenuService ]
})
export class HorizontalMenuComponent implements OnInit {
  @Input('menuParentId') menuParentId;
  public menuItems:Array<any>;
  public settings: Settings;
  public currentYear: String;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor(public appSettings:AppSettings, public dialog : MatDialog, public menuService:MenuService, public router:Router) { 
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    let loginUser = localStorage.getItem("login_user_info");
    let loginpassword = localStorage.getItem('lgnpass');
    if(loginUser == "admin@bm.com") {
      this.currentYear = ''+ (new Date()).getFullYear();
      this.menuItems = this.menuService.getHorizontalMenuItems();
      this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    if(loginUser == "builder@bm.com") {
      this.currentYear = ''+ (new Date()).getFullYear();
      this.menuItems = this.menuService.getHorizontalBuilderMenuItems();
      this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    if(loginUser == "broker@bm.com") {
      this.currentYear = ''+ (new Date()).getFullYear();
      this.menuItems = this.menuService.getHorizontalBrokerMenuItems();
      this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    if(loginUser == "customer@bm.com") {
      this.currentYear = ''+ (new Date()).getFullYear();
      this.menuItems = this.menuService.getHorizontalCustomerMenuItems();
      this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    if(loginUser == "agent@bm.com") {
      this.currentYear = ''+ (new Date()).getFullYear();
      this.menuItems = this.menuService.getHorizontalAgentMenuItems();
      this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    if(loginUser == "realtor@bm.com") {
      this.currentYear = ''+ (new Date()).getFullYear();
      this.menuItems = this.menuService.getHorizontalRealtorMenuItems();
      this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    // if(loginpassword == 'praveen@123'){
    //   this.currentYear =''+(new Date()).getFullYear();
    //   this.menuItems = this.menuService.getHorizontalpasswordMenuItems();
    //   this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);

    // }
  }

  
  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      // console.log('hi1')
      if (event instanceof NavigationEnd) {
        // console.log(event)
        // console.log('Hello')
        // console.log(event instanceof NavigationEnd)
        
        if(this.settings.fixedHeader){
          // console.log(this.settings.fixedHeader)
          let mainContent = document.getElementById('main-content');
          // console.log(mainContent)
          if(mainContent){
            mainContent.scrollTop = 0;
          }
        }
        else{
          document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
        }
      }                
    });
  }
  
  checkMenuLink(menuId){
   
   
    
   
  }

}
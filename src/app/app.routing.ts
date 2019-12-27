import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ManageInventoryComponent } from './manage-inventory/manage-inventory.component';
import { ManageLeadComponent } from './manage-lead/manage-lead.component';



export const routes: Routes = [
    {
        path:'sare',
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'analytics', pathMatch: 'full'},
            // { path: 'dashboard', loadChildren: './analytics/dashboard/dashboard.module#DashboardModule',pathMatch:"full", data: { breadcrumb: 'Dashboard' }},
            { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: 'Analytics' }},
            { path: 'property', loadChildren: './property/property.module#PropertyModule', data: { breadcrumb: 'property' }},
            // { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', data: { breadcrumb: 'Reports' }},
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' }},
            { path: 'realtors', loadChildren:'./realtors/realtors.module#RealtorsModule',  data: { breadcrumb: 'Manage Realtor'} },
            { path: 'marketing', loadChildren:'./marketing/marketing.module#MarketingModule', data: { breadcrumb: 'Marketing'} },
            { path : 'sales', loadChildren:'./sales/sales.module#SalesModule', data: {breadcrumb:'Sales'} },
            { path: 'manageinventory', component:ManageInventoryComponent,  data: { breadcrumb: 'Manage Inventory'} },
            { path: 'managelead', component:ManageLeadComponent,  data: { breadcrumb: 'Manage Leads'} },
            { path: 'alert', loadChildren:'./alert/alert.module#AlertModule',  data: { breadcrumb: 'Alert'} },
            { path: 'paymentschedule', loadChildren:'./payment-schedule/paymentschedule.module#PaymentscheduleModule',  data: { breadcrumb: 'Payment Schedule'} },
            { path: 'broker', loadChildren:'./broker/broker.module#BrokerModule',  data: { breadcrumb: 'Broker/Agent'} },
            { path: 'builder', loadChildren: './builder/builder.module#BuilderModule', data: { breadcrumb: 'Manage Builder'}},
            { path: 'payments',loadChildren:'./payments/payments.module#PaymentsModule', data:{ breadcrumb:'Payments'}}
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' }  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   // useHash: true
}); 
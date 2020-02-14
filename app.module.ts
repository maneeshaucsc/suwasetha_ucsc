import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';


import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
//import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';

import {
  AgmCoreModule
} from '@agm/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'environments/environment';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { MatDialogModule, MatButtonModule, MatInputModule, MatSliderModule } from '@angular/material';
import { SystemUsersService } from './shared/services/system-users.service';
import { PrescriptionsService} from './shared/services/prescriptions.service'
import { MaterialModule } from './shared/material/material.module';
import { RoleService } from './shared/services/role.service';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { HomeComponent } from './home/home.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { Testing2Component } from './testing2/testing2.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';


import { HospitalListComponent } from './layouts/adminComponents/Hospital/hospital-list/hospital-list.component';
// { DispensaryComponentComponent } from './layouts/dispensary-component/dispensary-component.component';
import { DoctorFooterComponent } from './doctor-bars/doctor-footer/doctor-footer.component';
import { DoctorNavbarComponent } from './doctor-bars/doctor-navbar/doctor-navbar.component';
import { DoctorSidebarComponent } from './doctor-bars/doctor-sidebar/doctor-sidebar.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
 //import { DoctorComponentsComponent } from './layouts/doctor-components/doctor-components.component';
// import { DashboardComponent } from './layouts/doctor-components/dashboard/dashboard.component';
// import { UserProfileComponent } from './layouts/doctor-components/user-profile/user-profile.component';
//import { AppointmentsComponent } from './layouts/doctor-components/appointments/appointments.component';
//import { PrescriptionsComponent } from './layouts/doctor-components/prescriptions/prescriptions.component';
//import { BlogPostsComponent } from './layouts/doctor-components/blog-posts/blog-posts.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MaterialModule,
    ToastrModule.forRoot()
   /* AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })*/
  ],
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    ConfirmDialogComponent,
    DispensaryLayoutComponent,
    HomeComponent,
    DoctorLayoutComponent,
   
    

    //DispensaryComponentComponent,

    DoctorLayoutComponent,

  
    DoctorFooterComponent,

    DoctorNavbarComponent,

    

   // DoctorComponentsComponent,

    //AppointmentsComponent,

    //PrescriptionsComponent,




  ],
  providers: [SystemUsersService, RoleService, PrescriptionsService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }

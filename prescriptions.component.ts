import { Component, OnInit, ViewChild } from '@angular/core';
import { PrescriptionsService } from 'app/shared/services/prescriptions.service';
import { NotificationsService } from 'app/shared/services/notifications.service'
import { MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss']
})
export class PrescriptionsComponent implements OnInit {
  


 
  constructor(private service : PrescriptionsService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<PrescriptionsComponent>
    ) { }

 

  ngOnInit() {
      this.service.getPrescriptions();
    }

    onClear(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      
      
    }

    onSubmit(){
      if(this.service.form.valid){
        if(!this.service.form.get('$key').value)
          this.service.insertPrescriptions(this.service.form.value);
        else
        this.service.updatePrescriptions(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success('Submitted Successfully');
        this.onClose();
        
        
      }
    }

    onClose(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }



}


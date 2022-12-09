import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataBodyMeasurements } from 'src/app/models/data-body-measurements';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

arrayData:DataBodyMeasurements[]=[];

iptName:string='';
iptArm:number=0;
iptChest:number=0;
iptWaist:number=0;
iptHip:number=0;
iptLeg:number=0;
iptCalf:number=0;

profilePersonForm = this.fb.group({
    namePerson: ['',Validators.required],
    infoBody: this.fb.group({
    dataArm: [''],
    dataChest: [''],
    dataWaist: [''],
    dataHip: [''],
    dataLeg: [''],
    dataCalf: [''],
    })
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  btnSave()
  {
    
    this.profilePersonForm.reset();
  }

  btnUpdate()
  {
    this.profilePersonForm.patchValue({
      namePerson: 'Al Lien',
      infoBody:{
        dataArm: '3',
        dataChest: '1',
        dataWaist: '3',
      }
    })
    console.log(this.profilePersonForm)
  }
}

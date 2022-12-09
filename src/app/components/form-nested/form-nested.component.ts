import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-nested',
  templateUrl: './form-nested.component.html',
  styleUrls: ['./form-nested.component.css']
})
export class FormNestedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  profilePersonForm = new FormGroup({
    namePerson: new FormControl (''),
    infoBody: new FormGroup({
    dataArm: new FormControl(''),
    dataChest: new FormControl(''),
    dataWaist: new FormControl(''),
    dataHip: new FormControl(''),
    dataLeg: new FormControl(''),
    dataCalf: new FormControl(''),
    })
  });

  btnSend()
  {
    console.log(this.profilePersonForm.value)
    this.profilePersonForm.reset();
  }

  updateData()
  {
    this.profilePersonForm.patchValue({
      namePerson: 'Al Lien',
      infoBody: {
        dataArm: '31'
      }
    });
    console.log(this.profilePersonForm.value)
  }
}

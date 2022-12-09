import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group',
  templateUrl: './reactive-form-group.component.html',
  styleUrls: ['./reactive-form-group.component.css']
})
export class ReactiveFormGroupComponent implements OnInit {
  
  champForm = new FormGroup({
    nameChamp: new FormControl(''),
    positionChamp: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  sendForm()
  {
    console.log(this.champForm.value);
  }

}

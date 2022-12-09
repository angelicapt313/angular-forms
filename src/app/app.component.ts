import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exerciseForm';

  nameChamp = new FormControl('');

  updateNameChamp()
  {
    this.nameChamp.setValue('Tristana');
  }

}

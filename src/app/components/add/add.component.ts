import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newAdressForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.newAdressForm = new FormGroup ({
      AddressName: new FormControl(null, Validators.required),
      Address: new FormControl(null, Validators.required),
      AdressPostalCode: new FormControl(null, Validators.required),
  });
  }
   add() {
     
   }
}

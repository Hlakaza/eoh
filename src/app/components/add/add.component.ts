import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from '../../services/address.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newAdressForm: FormGroup;
  showSuccess = false;
  constructor(private adress: AddressService ) { }

  ngOnInit() {
    this.newAdressForm = new FormGroup ({
      AddressName: new FormControl(null, Validators.required),
      Address: new FormControl(null, Validators.required),
      AdressPostalCode: new FormControl(null, Validators.required),
  });
  }
   addNew() {
      this.adress.add(this.newAdressForm.value).subscribe(res => {
      this.showSuccess = true;
      }, err => {console.log('error', err); });
   }
}

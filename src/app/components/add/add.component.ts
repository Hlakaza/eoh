import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from '../../services/address.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  newAdressForm: FormGroup;
  showSuccess = false;
  error = false ;
  constructor(private adress: AddressService,
              private router: Router) { }

  ngOnInit() {
    this.newAdressForm = new FormGroup ({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required)
   });
  }
   addNew() {
     if (this.newAdressForm.valid) {
        this.adress.add(this.newAdressForm.value).subscribe(res => {
          this.showSuccess = true;
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 1000);
          }, err => {console.log('error', err); });
      } else {
        this.error = true;
      }
   }
}

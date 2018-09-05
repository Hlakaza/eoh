import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  addressDetails: any = [];
  constructor( private address: AddressService) {}

  ngOnInit() {
    this.address.getAddresses().subscribe(res => {
      this.addressDetails = res;
      console.log('adreesses', this.addressDetails);
    }, err => {console.log('404', err); }
  );
  }

}

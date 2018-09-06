import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  addressDetailsList: any = [];

  constructor( private address: AddressService) { }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.address.getAddresses().subscribe(res => {
      this.addressDetailsList = JSON.parse(res['_body']);
    },
    err => {console.log(err); });
    setTimeout(() => {
     this.getDetails();
    }, 1000);
  }
}

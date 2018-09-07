import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddComponent } from './components/add/add.component';
import { AddressService } from './services/address.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eoh';
  addressDetailsList: any = [];
  constructor(private router: Router, private dialog: MatDialog, private address: AddressService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
   };
   this.router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
       this.router.navigated = false;
       this.getDetails();
    }
});
  }
  ngOnInit() {
    this.getDetails();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  getDetails() {
    this.address.getAddresses().subscribe(res => {
      this.addressDetailsList = JSON.parse(res['_body']);
    },
    err => {console.log(err); });
  }
}

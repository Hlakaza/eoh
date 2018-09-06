import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddComponent } from './components/add/add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eoh';
  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

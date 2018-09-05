import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { AddComponent } from './components/add/add.component';

const routes = [
  { path: 'list', component: AddressesComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    AddComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

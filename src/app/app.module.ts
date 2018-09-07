import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';

const routes = [
  { path: 'add', component: AddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent
  ],

  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    NoopAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(
      routes,
      {onSameUrlNavigation: 'reload'}
    )
  ],

  exports: [RouterModule],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

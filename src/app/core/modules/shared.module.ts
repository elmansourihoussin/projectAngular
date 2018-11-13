import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// For MultiSelect ==> npm i angular2-multiselect-dropdown
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ConfirmDialogModule } from '@core/components/confirm-dialog/confirm-dialog.module';




@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
   // AngularMultiSelectModule,
    ConfirmDialogModule

  ],
  exports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    // AngularMultiSelectModule,
    ConfirmDialogModule
  ]

})
export class SharedModule { }

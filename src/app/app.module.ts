import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { AdminComponent } from './admin/admin.component';

import { EmployeeService } from './employee.service';
import { SorterService } from './sorter.service';


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    NavbarComponent,
    DetailsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, SorterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

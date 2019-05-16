import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataCollectionFormComponent } from './data-collection-form/data-collection-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DesignComponent } from './design/design.component';
import { DataSharingService } from './data-sharing.service';
import { HomeComponent } from './home/home.component';
import { SolidWasteFormComponent } from './solid-waste-form/solid-waste-form.component';
import { MatSelectModule } from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DataCollectionFormComponent
  // },
  // {
  //   path: 'design',
  //   component: DesignComponent

  // },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DataCollectionFormComponent,
    DesignComponent,
    HomeComponent,
    SolidWasteFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [DataSharingService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

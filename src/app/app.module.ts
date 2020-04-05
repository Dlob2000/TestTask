import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { InventoryDescriptionComponent } from './inventory-description/inventory-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    InventoryDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

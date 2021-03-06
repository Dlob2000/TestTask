import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReportComponent} from './report/report.component';
import {InventoryDescriptionComponent} from './inventory-description/inventory-description.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
        AppComponent,
        ReportComponent,
        InventoryDescriptionComponent,
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

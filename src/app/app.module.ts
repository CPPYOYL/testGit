import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo';
import { ChildComponent } from './child/child';

import { Myservice } from './myservice/myservice';
import { ClarityModule } from "@clr/angular";


import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AjaxService }        from './ajax.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule
  ],
  providers: [
  Myservice,
  AjaxService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

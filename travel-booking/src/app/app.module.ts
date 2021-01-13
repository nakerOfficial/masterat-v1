import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Booking2Component } from './booking2/booking2.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    Booking2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    Booking2Component
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  } ngDoBootstrap() {
    const myCustomElement = createCustomElement(Booking2Component, { injector: this.injector });
    customElements.define('app-travel-booking', myCustomElement);
  }
}

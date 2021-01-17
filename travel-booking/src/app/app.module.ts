import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

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
  bootstrap: [AppComponent],
  entryComponents: [
    Booking2Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(private injector: Injector) {
  } ngDoBootstrap() {
    const myCustomElement = createCustomElement(Booking2Component, { injector: this.injector });
    customElements.define('app-travel-booking', myCustomElement);
  }
}

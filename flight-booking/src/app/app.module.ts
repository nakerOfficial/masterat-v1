import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    BookingComponent
  ]
})
export class AppModule { 
  constructor(private injector: Injector) {
  }  ngDoBootstrap() {
    const myCustomElement = createCustomElement(BookingComponent, { injector: this.injector });
    customElements.define('app-flight-booking', myCustomElement);
  }
}

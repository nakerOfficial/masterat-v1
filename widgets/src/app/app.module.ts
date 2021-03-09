import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OriginalLogoComponent } from './original-logo/original-logo.component';
import { createCustomElement } from '@angular/elements';
import { environment } from 'src/environments/environment';

function addBootstrap() {
  return 
}


@NgModule({
  declarations: [
    AppComponent,
    OriginalLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  bootstrap: [
    ...(!environment.production && [AppComponent] || [])
  ],
  entryComponents: [
    OriginalLogoComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const myCustomElement = createCustomElement(OriginalLogoComponent, { injector: this.injector });
    customElements.define('original-logo', myCustomElement);
  }
}

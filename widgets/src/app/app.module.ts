import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OriginalLogoComponent } from './original-logo/original-logo.component';
import { createCustomElement } from '@angular/elements';
import { environment } from 'src/environments/environment';
import { ContentOneComponent } from './content-one/content-one.component';
import { ContentTwoComponent } from './content-two/content-two.component';


@NgModule({
  declarations: [
    AppComponent,
    OriginalLogoComponent,
    ContentOneComponent,
    ContentTwoComponent
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
    OriginalLogoComponent,
    ContentOneComponent,
    ContentTwoComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    customElements.define('original-logo', createCustomElement(OriginalLogoComponent, { injector: this.injector }));
    customElements.define('content-one', createCustomElement(ContentOneComponent, { injector: this.injector }));
    customElements.define('content-two', createCustomElement(ContentTwoComponent, { injector: this.injector }));
  }
}

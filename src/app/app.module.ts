import { NgModule } from '@angular/core';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from '@core/modules/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

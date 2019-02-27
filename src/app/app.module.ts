import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationControlsComponent } from './components/animation-controls/animation-controls.component';
import { LEDControlsComponent } from './components/ledcontrols/ledcontrols.component';
import { RangeControlComponent } from './components/range-control/range-control.component';
import { LightingComponent } from './components/lighting/lighting.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationControlsComponent,
    LEDControlsComponent,
    RangeControlComponent,
    LightingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

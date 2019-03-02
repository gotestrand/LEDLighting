import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationControlsComponent } from './components/animation-controls/animation-controls.component';
import { LEDControlsComponent } from './components/ledcontrols/ledcontrols.component';
import { RangeControlComponent } from './components/range-control/range-control.component';
import { LightingComponent } from './components/lighting/lighting.component';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorCompactModule } from 'ngx-color/compact';

import { ColorAlphaModule } from 'ngx-color/alpha'; // <color-alpha-picker></color-alpha-picker>
import { ColorBlockModule } from 'ngx-color/block'; // <color-block></color-block>
import { ColorChromeModule } from 'ngx-color/chrome'; // <color-chrome></color-chrome>
import { ColorCircleModule } from 'ngx-color/circle'; // <color-circle></color-circle>
import { ColorGithubModule } from 'ngx-color/github'; // <color-github></color-github>
import { ColorHueModule } from 'ngx-color/hue'; // <color-hue-picker></color-hue-picker>
import { ColorMaterialModule } from 'ngx-color/material'; // <color-material></color-material>
import { ColorPhotoshopModule } from 'ngx-color/photoshop'; // <color-photoshop></color-photoshop>
import { ColorSliderModule } from 'ngx-color/slider'; // <color-slider></color-slider>
import { ColorSwatchesModule } from 'ngx-color/swatches'; // <color-swatches></color-swatches>
import { ColorTwitterModule } from 'ngx-color/twitter'; // <color-twitter></color-twitter>

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
    AppRoutingModule,
    ColorSketchModule,
    ColorCompactModule,
    ColorCircleModule,
    ColorSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

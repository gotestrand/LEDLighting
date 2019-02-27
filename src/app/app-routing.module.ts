import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LightingComponent } from './components/lighting/lighting.component';

const routes: Routes = [
    {path: '', component: LightingComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

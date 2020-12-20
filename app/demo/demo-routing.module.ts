import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';
import { ButtonDemoComponent } from './button-demo/button-demo.component';


const DEMO_ROUTES: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {
        path: 'button-demo',
        component: ButtonDemoComponent
      },
      
    
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'button-demo'
      }]
  }]
@NgModule({
  imports: [RouterModule.forChild(DEMO_ROUTES)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
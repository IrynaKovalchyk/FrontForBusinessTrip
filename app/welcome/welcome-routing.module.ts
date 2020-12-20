import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';

const Welcome_ROUTES: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
    children: [
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
    
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
      }]
  }]

@NgModule({
  imports: [RouterModule.forChild(Welcome_ROUTES)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
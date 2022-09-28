import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempeUsersPage } from './tempe-users.page';

const routes: Routes = [
  {
    path: '',
    component: TempeUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempeUsersPageRoutingModule {}

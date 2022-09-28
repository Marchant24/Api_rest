import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempeUsersPageRoutingModule } from './tempe-users-routing.module';

import { TempeUsersPage } from './tempe-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempeUsersPageRoutingModule
  ],
  declarations: [TempeUsersPage]
})
export class TempeUsersPageModule {}

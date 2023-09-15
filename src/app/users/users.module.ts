import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './views/list-users/list-users.component';
import { ButtonModule, CardModule, FormModule, GridModule, ListGroupModule, ModalModule, TableModule, WidgetModule } from '@coreui/angular';
import { GetUserComponent } from './views/get-user/get-user.component';
import { WidgetsModule } from '../views/widgets/widgets.module';
import { SharedCustomModule } from '../shared-custom/shared-custom.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListUsersComponent,
    GetUserComponent,
  ],
  imports: [
    CommonModule,
    GridModule,
    CardModule,
    TableModule,
    FormModule,
    ListGroupModule,
    ModalModule,
    ButtonModule,
    FormsModule,

    WidgetsModule,
    SharedCustomModule,
    UsersRoutingModule
  ],
})
export class UsersModule { }

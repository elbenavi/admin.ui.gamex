import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './views/list-users/list-users.component';
import { GetUserComponent } from './views/get-user/get-user.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'list', component: ListUsersComponent },
    { path: ':id', component: GetUserComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

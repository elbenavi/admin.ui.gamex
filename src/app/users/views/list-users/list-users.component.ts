import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.services';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'users-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public users :User[] = [];

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(users => {
        this.users = users;
      })
  }
}

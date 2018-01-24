import { Component, OnInit } from '@angular/core';

import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  user: User[];

  constructor(
    private userService: UserService,
  ) {
    this.userService.index()
      .then(user =>
        this.user = user
      )
      .catch(response => null);
  }

  ngOnInit() {
  }

}

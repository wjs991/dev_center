import {Component, OnDestroy, OnInit} from '@angular/core';
import {todo}from '../todo';
import {AuthService} from '../auth.service';
import {TodoService}from '../todo.service';
import {Subscription} from "rxjs/Subscription";
import {NavigationStart, Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnDestroy {
  Todo_list: todo[];
  username:any;
  subscription: Subscription;
  json:any;
  constructor(
    private router: Router,
    public authService: AuthService,
    public todoService: TodoService
  ) {
    this.authService.refresh();
    this.json = this.authService.getname();
    console.log(this.json);
    this.todoService.show(this.json.username).then(todo=>this.Todo_list=todo).catch(reason => null);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }



}

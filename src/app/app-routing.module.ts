/**
 * Created by sengwon on 2018-01-01.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import {Error404Component} from './error404/error404.component';
import { LoginComponent} from './login/login.component';
import { UserNewComponent } from './user-new/user-new.component'; //*
import {UserIndexComponent} from './user-index/user-index.component';
import {WelcomeComponent}from './welcome/welcome.component';
import {AuthGuard} from "./auth.guard";
import {PeedComponent} from "./login/peed/peed.component";
import {ProjIndexComponent} from "./login/proj-index/proj-index.component";
import {ProjNewComponent} from "./login/proj-new/proj-new.component";
import {PostNewComponent} from "./welcome/post-new/post-new.component";
import {PostEditComponent} from "./welcome/post-edit/post-edit.component";

const routes: Routes = [
  { path: '',  component: WelcomeComponent },
  {path:'post/new', component:PostNewComponent},
  {path:'post/edit', component:PostEditComponent},
  {path:'login', component:LoginComponent},
  {path:'proj',component:ProjIndexComponent},
  {path:'proj/new',component:ProjNewComponent},
  {path:'peed',component:PeedComponent},
  {path:'todo',component:IndexComponent},
  { path: 'user/new',  component: UserNewComponent }, //*
  { path: 'user', canActivate: [AuthGuard], //1
    children: [
      { path: '', component: UserIndexComponent },
    ]
  },
  {path: '**', component:Error404Component},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

///<reference path="../../node_modules/@angular/common/http/src/interceptor.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'; //1
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //*
import {AppRoutingModule} from './app-routing.module';
import { AuthGuard } from './auth.guard'; //1


import { UtilService } from './util.service'; //2
import { AuthService } from './auth.service'; //3
import {UserService} from './user.service';
import {TodoService} from './todo.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserIndexComponent } from './user-index/user-index.component';
import {RequestInterceptor} from "./request-interceptor.service";
import { WelcomeComponent } from './welcome/welcome.component';

import { MatProgressBarModule } from '@angular/material';
import { PeedComponent } from './login/peed/peed.component';
import { ProjIndexComponent } from './login/proj-index/proj-index.component';
import { ProjNewComponent } from './login/proj-new/proj-new.component';
import { PostNewComponent } from './welcome/post-new/post-new.component'; //1
import {PostService} from './post.service';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { PostCiComponent } from './welcome/post-new/post-ci/post-ci.component';
import { PostPreComponent } from './welcome/post-pre/post-pre.component';
import { PostEditComponent } from './welcome/post-edit/post-edit.component';
import { PostEditcliComponent } from './welcome/post-edit/post-editcli/post-editcli.component';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    Error404Component,
    LoginComponent,
    UserNewComponent,
    UserIndexComponent,
    WelcomeComponent,
    PeedComponent,
    ProjIndexComponent,
    ProjNewComponent,
    PostNewComponent,
    PostCiComponent,
    PostPreComponent,
    PostEditComponent,
    PostEditcliComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //1
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    MaterialModule,


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,  useClass: RequestInterceptor,  multi: true},
    AuthGuard,
    UtilService, //2
    AuthService, //3
    UserService,
    TodoService,
    PostService,
  ],
  entryComponents:[
    PostPreComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

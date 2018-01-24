import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output,
  OnInit
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { ApiResponse } from '../../api-response';

import { UtilService } from '../../util.service';
import { AuthService } from '../../auth.service';
import {PostService}from'../../post.service';
import {Post} from '../../post';
@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html'
})
export class PostNewComponent implements AfterViewInit, OnDestroy,OnInit {
  post: Post = new Post();
  errorResponse: ApiResponse;
  defaultBody:any ="";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utilService: UtilService,
    private postservice: PostService
  ){}
  ngAfterViewInit() {

  }

  ngOnDestroy() {


  }
  ngOnInit(){

  }

  onSubmit():void{
      this.postservice.postPost(this.post)
        .then(data =>{
        this.router.navigate(['/']);
      })
        .catch(response =>{
          this.errorResponse = response;
          console.log("err");
          this.utilService.handleApiError(this.errorResponse);
        });
  }

  onBodyTextEditorKeyUp(textvalue){
    console.log("Text is chenge",textvalue);
    this.post.body =textvalue;
  }
}

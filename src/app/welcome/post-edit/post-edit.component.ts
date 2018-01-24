import { Component, OnInit } from '@angular/core';
import {Post} from "../../post";
import {Params} from "@angular/router";
import {PostService} from '../../post.service';
import {ApiResponse} from "../../api-response";
import {UtilService} from '../../util.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post: Post = new Post();
  errorResponse: ApiResponse;
  defaultBodyValue:String ="";
  constructor(
    private postservice : PostService,
    private utilService : UtilService,
    private router:Router,
  ) {
    this.post = postservice.getPost();
    console.log(this.post);
    this.defaultBodyValue = this.post.body;
    console.log(this.post.id);
    this.postservice.setBody(this.defaultBodyValue);

  }

  ngOnInit() {


  }
  onSubmit():void{
    this.postservice.postUpdate(this.post,this.post.id)
      .then(data =>{
        console.log(this.post);
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

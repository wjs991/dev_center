import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth.service';
import {PostService} from '../../post.service';
import {Post} from '../../post';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-pre',
  templateUrl: './post-pre.component.html',
  styleUrls: ['./post-pre.component.css'],

})
export class PostPreComponent {
  date:Date[];
  _ref:any;
  post:Post[];

  //date: Date[] = new Array(2);
  constructor(
  private router: Router,
  private authservice : AuthService,
  private postservice : PostService,)
  {
    this.date = this.postservice.getDate();
    this.date[0].setDate(this.date[0].getDate()-1);
    this.date[1].setDate(this.date[1].getDate()-1);
    console.log(this.date);
    this.postservice.setDate(this.date);
    this.postservice.postshow(this.postservice.getPageNum())
      .then(post=> {
        this.post=post;
      })
      .catch(response => null);
    this.postservice.setPageNum();
    }

  deletePost(){

  }

  sendPost(ppp:Post){
    this.postservice.setPost(ppp);
    this.router.navigate(['/post/edit']);
  }

  DeletePost(ppp: String){
    this.postservice.postDelete(ppp);
    this.router.navigate(['/']);
  }
}

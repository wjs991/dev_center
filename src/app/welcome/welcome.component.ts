import {Component, ViewChild, NgZone, OnInit ,ComponentFactoryResolver,
  ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';
import {PostService} from '../post.service';
import {Post} from '../post';
import {PostPreComponent} from './post-pre/post-pre.component';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @ViewChild('parent',{read:ViewContainerRef}) container:ViewContainerRef;
  post:Post[];

  statusText: string = "not reached";
  checktime: boolean = false;
  date: Date[] = new Array(2);
  adcom: number = 0;

  constructor(
    private router: Router,
    private authservice : AuthService,
    private postservice : PostService,
    private _ctr: ComponentFactoryResolver,
    lc: NgZone,
  ) {
    this.date[0] = new Date();
    this.date[1] = new Date();
    this.date[1].setDate(this.date[0].getDate()-1);
    this.postservice.postshow(this.postservice.pageNum)
      .then(post=> {

         this.post=post;

      })
      .catch(response => null);
    postservice.setDate(this.date);

    window.onscroll = () => {

      let status = "not reached";
      let windowHeight = "innerHeight" in window ? window.innerHeight
        : document.documentElement.offsetHeight;
      let body = document.body, html = document.documentElement;
      let docHeight = Math.max(body.scrollHeight,
        body.offsetHeight, html.clientHeight,
        html.scrollHeight, html.offsetHeight);
      let windowBottom = windowHeight + window.pageYOffset;
      lc.run(() => {
        this.statusText = status;//bottom
        if (windowBottom >= docHeight || docHeight - windowBottom<1) {

          this.adcom++;
          console.log("한번더 스크롤!");
          if(this.adcom >=2){
            this.adcom = 0;
            this.getpost();
            this.addComponent();
          }
        }
      });
    };
  }

  ngOnInit() {
    this.addComponent();
    this.postservice.zeroToNum();
  }

  onClick(): void{
    this.router.navigate(['/post/new']);
  }

  getpost(): void{
    this.postservice.postshow(this.postservice.pageNum)
      .then(post=> {

        this.post=post;

      })
      .catch(response => null);
    console.log(this.post);
  }

  addComponent(){

    var comp = this._ctr.resolveComponentFactory(PostPreComponent);
    var postpreComponent = this.container.createComponent(comp);
    postpreComponent.instance._ref = postpreComponent;
  }

}


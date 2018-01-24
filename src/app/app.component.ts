import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';
import {NavigationStart, Router, Event as RouterEvent,NavigationEnd,
  NavigationCancel,
  NavigationError,  } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loading: boolean = false; //2
  constructor(
    private router: Router,
    public authService: AuthService,
  ) {

      router.events.subscribe((event: RouterEvent) => { //1
      this.refreshToken(event);
      this.updateLoadingBar(event); //4
    });
    //this.user= this.route.snapshot.data['user'];
  }

  private refreshToken(event: RouterEvent): void {
    if (event instanceof NavigationStart && this.authService.isLoggedIn()) {
      this.authService.refresh().catch(response => null);
    }
  }
  private updateLoadingBar(event: RouterEvent): void { //3
    if (event instanceof NavigationStart) {
      this.loading = true;
      console.log("start");
    }
    if (event instanceof NavigationEnd
      || event instanceof NavigationCancel
      || event instanceof NavigationError) {
      this.loading = false;
    }
  }

  ngOnInit(){

  }
}

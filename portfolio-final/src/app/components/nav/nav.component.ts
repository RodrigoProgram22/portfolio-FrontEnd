import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  currentRoute: string = 'Demo';
  constructor(private router: Router) {}
  btnIni: boolean = true;
  btnVolver: boolean = false;
  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if ('/login' == event.url) {
          this.btnIni = false;
          this.btnVolver = true;
        } else if ('/inicio' == event.url) {
          this.btnIni = true;
          this.btnVolver = false;
        } else {
          this.btnIni = false;
          this.btnVolver = true;
        }
      }
    });
  }
}

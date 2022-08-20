import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
} from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLogged: boolean = false;
  currentRoute: string = 'Demo';
  constructor(private router: Router, private tokenServi: TokenService) {}
  btnIni: boolean = true;
  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (this.tokenServi.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if ('/login' == event.url || this.isLogged) {
          this.btnIni = false;
        } else if ('/inicio' === event.url && !this.isLogged) {
          this.btnIni = true;
        }
      }
    });
  }
  onLogOut(): void {
    this.tokenServi.logOut();
    window.location.reload();
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}

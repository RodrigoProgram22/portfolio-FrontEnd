import { Component, OnInit } from '@angular/core';
import { Acerca_de } from 'src/app/model/Acerca_deM';
import { AcercaDeService } from 'src/app/service/acerca-de.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  roles: string[];
  authority: string;
  isAdmin = false;
  constructor(public acerServ: AcercaDeService, private tokenS: TokenService) {}
  acerca_de: Acerca_de = null;
  ngOnInit(): void {
    this.acerServ.buscarAcercaDe(1).subscribe((data) => {
      this.acerca_de = data;
    });
    this.roles = this.tokenS.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
}

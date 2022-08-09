import { Component, OnInit } from '@angular/core';
import { Acerca_de } from 'src/app/model/Acerca_deM';
import { AcercaDeService } from 'src/app/service/acerca-de.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  login: boolean = false;

  //Inyectar el constructor el formBuilder
  constructor(public acerServ: AcercaDeService) {}
  acerca_de: Acerca_de = new Acerca_de('', '', '', '', '');

  ngOnInit(): void {
    this.acerServ.buscarAcercaDe(1).subscribe((data) => {
      this.acerca_de = data;
    });
  }
}

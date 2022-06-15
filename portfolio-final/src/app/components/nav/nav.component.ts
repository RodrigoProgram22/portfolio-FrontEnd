import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  btnIni: boolean = true;
  btnVolver: boolean = false;
  boleanoBtn() {
    this.btnIni = false;
    this.btnVolver = true;
  }
  boleanoBtn1() {
    this.btnVolver = false;
    this.btnIni = true;
  }
}

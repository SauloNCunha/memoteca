import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear(); // Inicializa o ano corrente
  }
  //constructor() { }

  ngOnInit(): void {
  }

}

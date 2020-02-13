// aqui estamos importando o componente do pacote angular core
import { Component, OnInit } from '@angular/core';

// aqui declararmos a classe do componente App Header
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Component app-header iniciado...')
  }

}

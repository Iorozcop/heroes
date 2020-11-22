import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() listaHeroes:any=[];
  @Output() miHeroe = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    
  }

  heroePreferido(heroe:string):void{
    this.miHeroe.emit(heroe);
  }

}

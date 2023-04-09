import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output()  private selectedAction : EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }


  public changeAction(action){
    this.selectedAction.emit(action)
  }
}

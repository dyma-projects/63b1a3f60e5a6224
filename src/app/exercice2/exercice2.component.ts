import { ElementRef, AfterViewInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string = "exercice 2";
  @ViewChild('valeurInput', {static : true}) public el!: ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit() {
    this.el.nativeElement.value = this.valeur
  }

}

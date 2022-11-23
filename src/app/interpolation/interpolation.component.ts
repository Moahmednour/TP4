import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  titre: string = 'Interpolation';
  nom: string = "Foulen";
  age: number = 20;
  infos() {
    return ' ' + this.nom + ' a pour âge ' + this.age + 'ans.';
  }
  constructor() {}

  ngOnInit(): void {}
}

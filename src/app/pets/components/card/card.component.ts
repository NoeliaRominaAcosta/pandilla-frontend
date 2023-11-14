import { Component, Input, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/Pet.interface';

@Component({
  selector: 'pets-pet-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit{
  ngOnInit(): void {
    if(!this.pet) throw new Error('Mascota Requerida');
  }
  @Input()
  public pet!:Pet;

}

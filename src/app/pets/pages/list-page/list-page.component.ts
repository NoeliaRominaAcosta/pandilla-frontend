import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pets.service';
import { Pet } from '../../interfaces/Pet.interface';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

  public pets: Pet[]= [];
  constructor(private petService : PetService){

  }
  ngOnInit(): void {
    this.petService.listPets()
      .subscribe(pets => {
        this.pets = pets;

      });


  }
  }


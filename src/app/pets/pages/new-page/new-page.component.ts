import { Component } from '@angular/core';
import { PetService } from '../../services/pets.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',

})
export class NewPageComponent {
  public petForm = new FormGroup({
    id:        new FormControl<string>(''),
    name: new FormControl<string>('', { nonNullable: true }),

    age: new FormControl(''),
    arrivalDate: new FormControl(''),
    adoptedDate: new FormControl(''),
    adoptedBy:    new FormControl(''),
    dewormed:    new FormControl(''),
    castration:    new FormControl(''),
    birthDate:    new FormControl(''),
    vetVisitDate:    new FormControl(''),
    image:    new FormControl(''),
    healthCondition:    new FormControl(''),
  });


  constructor(private petService : PetService){

  }

  onSubmit():void{

  }
}

import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {DataService} from "../../service/data.service";
import {Recipe} from "../../model/recipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-recipe',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form-recipe.component.html',
  styleUrl: './form-recipe.component.css'
})
export class FormRecipeComponent implements OnInit{

  regForm?: FormGroup;

  newRecipeInput?: Recipe;

  dataService = inject(DataService)

  protected readonly onsubmit = onsubmit;
  responseText: string = "";
  router: Router;

  constructor(routers: Router) {
    this.router = routers;
  }

  ngOnInit() {
    this.regForm = new FormGroup({
      'erstellerName': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'zutaten': new FormControl(null, Validators.required),
      'beschreibung': new FormControl(null, Validators.required),
      'bildPfad': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.regForm?.value);

    const formValues = this.regForm?.value;

    const newRecipeForm=  {
      'id': null,
      'name': formValues.name,
      'erstellerName': formValues.erstellerName,
      'zutaten': formValues.zutaten ? formValues.zutaten.split(',').map((ingredient: string) => ingredient.trim()) : [],
      'beschreibung': formValues.beschreibung,
      'bildPfad': formValues.bildPfad,
    };
    this.newRecipe(newRecipeForm);
  }


  newRecipe(newRecipes: {} ) {
    this.dataService.createNewRecipe(newRecipes).subscribe((res) => {
      console.log(res);
      this.responseText = this.responseText;
      this.router.navigate(["all"]).then();
    }, error => {
      this.responseText = error.error.text;
      this.router.navigate(["all"]).then();
      console.log(error);
    });
  }


}

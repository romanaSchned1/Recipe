import {Component, inject, Input, input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Recipe} from "../../model/recipe";
import {DataService} from "../../service/data.service";
import {HeaderComponent} from "../header/header.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-find-your-recipe',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    HeaderComponent,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './find-your-recipe.component.html',
  styleUrl: './find-your-recipe.component.css'
})
export class FindYourRecipeComponent implements OnInit{

  recipes!: any[];

  recipe: Recipe = {} as Recipe;

  dataService = inject(DataService)

  filteredRecipes: Recipe[] = [];

  recipeToAllList: [] = [];

  @Input() filter : string = ""
  @Input() filterIngredients: string = ""

  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    this.dataService.getAllRecipes().subscribe((res) => {
      console.log(res)

      this.recipes = res as Recipe[]
    }, error => {
      console.log(error)
    });
  }

  filterRecipes() {
    //const input = this.filter.toLowerCase();
    const input = this.filter.toLowerCase().split(',').map(input => input.trim());
    this.filteredRecipes = this.recipes.filter(recipe => {
      for (let i = 0; i < input.length; i++) {
        let search = input[i]
        /*if (search == "") {
          return false
        }*/
        const inName: boolean = recipe.name.toLowerCase().includes(search);
        const inBeschreibung: boolean = recipe.beschreibung.toLowerCase().includes(search);
        //const ingredientsArray = recipe.zutaten.split(';').map(zutat => zutat.trim().toLowerCase());
        let inZutaten = false
        for(let i = 0; i< recipe.zutaten.length; i++){
          if (recipe.zutaten[i].toLowerCase().includes(search)) inZutaten = true

          // @ts-ignore
          this.recipeToAllList[i] = recipe.id;
          console.log(this.recipeToAllList)
        }

        if (inName || inBeschreibung || inZutaten) {

          return true
        }
      }
      return false
    });
  }

  filterRecipesByIngredients() {
    const input = this.filterIngredients.toLowerCase().split(',').map(input => input.trim());
    this.filteredRecipes = this.recipes.filter(recipe => {
      for (let i = 0; i < input.length; i++) {
        let search = input[i]
        let inZutaten = false
        for(let i = 0; i< recipe.zutaten.length; i++){
          if (recipe.zutaten[i].toLowerCase().startsWith(search)) inZutaten = true
        }
        console.log(inZutaten)
        if (inZutaten) return true
      }
      return false
    });
  }

  protected readonly input = input;

}


import {Component, inject, Input, OnInit, ViewChild} from '@angular/core';
import {Recipe} from "../../model/recipe";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {HeaderComponent} from "../header/header.component";
import {DataService} from "../../service/data.service";
import {HttpClient} from "@angular/common/http";
import {ValuationComponent} from "../valuation/valuation.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-detail-recipe',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLinkActive,
    HeaderComponent,
    ValuationComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './detail-recipe.component.html',
  styleUrl: './detail-recipe.component.css'
})
export class DetailRecipeComponent implements OnInit{

  recipe: Recipe = {} as Recipe;
  router: Router;
  dataService = inject(DataService)

  recipeId: number | null = null;
  regForm?: FormGroup;
  responseText: string = "";




  constructor(private httpClient: HttpClient, private route: ActivatedRoute, routers: Router) {
    this.router = routers;
  }

  ngOnInit(): void {
    this.getId()

    this.regForm = new FormGroup({
      'kommentar': new FormControl("")
    });

  }

  getId(){
    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('id') as unknown as number;
      this.getRecipes()
    });
  }

  getRecipes (){
    console.log('id is '+this.recipeId)
    this.dataService.getRecipePerId(this.recipeId).subscribe((res) => {
      console.log(res)

      this.recipe = res as Recipe
    }, error => {
      console.log(error)
    });
  }

  //Sterne
  getStars(bewertung: number): any[] {
    return new Array(bewertung);
  }

  countStars(inputStars: number){
    console.log(inputStars)
    this.dataService.evaluateRecipe(this.recipe.id, inputStars).subscribe((res) => {
      console.log(res)
      this.getRecipes()

      //this.router.navigateByUrl('all');
    }, error => {
      console.log(error)
      this.getRecipes()
      //this.responseText = error.error.text;
    });
  }

  //rezept entfernen
  rezeptEntfernen() {
    this.dataService.deleteRecipe(this.recipeId).subscribe((res) => {
      console.log(res)
      this.router.navigate(["all"]).then();
    }, error => {
      console.log(error)
      this.router.navigate(["all"]).then();
    });
  }

  //Kommentar
  newComment(){
    const formValues = this.regForm?.value;

    console.log(this.recipe.id)
    console.log(formValues.kommentar)
    this.dataService.newComment(this.recipe.id, formValues.kommentar).subscribe((res) => {
      console.log('Comment added:', res);
      this.responseText = res.statusText;
      this.getRecipes()
    }, error => {
      this.responseText = error.error.text;
      this.getRecipes()
    });
  }

}

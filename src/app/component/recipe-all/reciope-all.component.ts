import {Component, inject, input, Input, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {HttpClient} from "@angular/common/http";
import {filter, Observable} from "rxjs";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {DataService} from "../../service/data.service";
import {Recipe} from "../../model/recipe";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-recipe-all',
  standalone: true,
  imports: [
    HeaderComponent,
    NgIf,
    NgForOf,
    RouterLinkActive,
    RouterLink,
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './reciope-all.component.html',
  styleUrl: './reciope-all.component.css'
})
export class ReciopeAllComponent implements OnInit {

  recipes!: any[];

  recipe: Recipe = {} as Recipe;

  dataService = inject(DataService)

  recipeId: number | null = null;


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getId()
  }

  getId() {
    this.route.paramMap.subscribe(params => {
      this.recipeId = params.get('id') as unknown as number;
      this.getRecipes()
    });
  }

  getRecipes() {
    this.dataService.getAllRecipes().subscribe((res) => {
      console.log(res)

      this.recipes = res as Recipe[]
    }, error => {
      console.log(error)
    });
  }

  getStars(numberStars: number) {
    return Array(numberStars)
  }

}

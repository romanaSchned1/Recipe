import {Component, inject, Input, input, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { RouterModule } from '@angular/router';
import {DataService} from "../../service/data.service";
import {Recipe} from "../../model/recipe";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {DetailRecipeComponent} from "../detail-recipe/detail-recipe.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{


}

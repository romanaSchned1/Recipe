import { Routes } from '@angular/router';
import {HeaderComponent} from "./component/header/header.component";
import {DetailRecipeComponent} from "./component/detail-recipe/detail-recipe.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {ReciopeAllComponent} from "./component/recipe-all/reciope-all.component";
import {FormRecipeComponent} from "./component/form-recipe/form-recipe.component";
import {FindYourRecipeComponent} from "./component/find-your-recipe/find-your-recipe.component";

export const routes: Routes = [
  {path:"", component: ReciopeAllComponent},
  {path:"all", component: ReciopeAllComponent},
  {path:"detail/:id", component: DetailRecipeComponent},
  {path:"newRecipe", component: FormRecipeComponent},
  {path:"recipeName", component: DetailRecipeComponent},
  {path:"findRecipe", component: FindYourRecipeComponent},
  {path:"**", component: NotFoundComponent}
];

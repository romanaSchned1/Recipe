import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  HttpClient = inject(HttpClient)

  constructor() {
  }

  getAllRecipes() {
    return this.HttpClient.get("http://localhost:8080/recipe/all");
  }

  getRecipePerId(data: number | null) {
    return this.HttpClient.get("http://localhost:8080/recipe/" + data);
  }

  createNewRecipe(data: {}) {
    return this.HttpClient.post("http://localhost:8080/recipe/newRecipe", data);
  }

  deleteRecipe(data: number | null) {
    return this.HttpClient.delete<Response>("http://localhost:8080/recipe/delete/" + data);
  }

  evaluateRecipe(recipeId: number, countStars: number) {
    //return this.HttpClient.post("http://localhost:8080/recipe/rand/{recipeId}", data);
    const url = `http://localhost:8080/recipe/stars/${recipeId}`;
    return this.HttpClient.post<Response>(url, countStars);
  }

  newComment(recipeId: number, comment: string) {
    const url = `http://localhost:8080/recipe/comment/${recipeId}`;
    return this.HttpClient.post<Response>(url, comment);
  }

}

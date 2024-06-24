import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLinkActive,
    HeaderComponent,
    RouterLink
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}

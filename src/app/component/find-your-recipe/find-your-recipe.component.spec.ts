import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourRecipeComponent } from './find-your-recipe.component';

describe('FindYourRecipeComponent', () => {
  let component: FindYourRecipeComponent;
  let fixture: ComponentFixture<FindYourRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindYourRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindYourRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

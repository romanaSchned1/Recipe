import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciopeAllComponent } from './reciope-all.component';

describe('ReciopeAllComponent', () => {
  let component: ReciopeAllComponent;
  let fixture: ComponentFixture<ReciopeAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciopeAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciopeAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

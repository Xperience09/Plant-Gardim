import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsCareComponent } from './plants-care.component';

describe('PlantsCareComponent', () => {
  let component: PlantsCareComponent;
  let fixture: ComponentFixture<PlantsCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

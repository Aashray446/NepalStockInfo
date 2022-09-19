import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDetailContainerComponent } from './cards-detail-container.component';

describe('CardsDetailContainerComponent', () => {
  let component: CardsDetailContainerComponent;
  let fixture: ComponentFixture<CardsDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsDetailContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

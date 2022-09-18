import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDisplayComponent } from './stock-display.component';

describe('StockDisplayComponent', () => {
  let component: StockDisplayComponent;
  let fixture: ComponentFixture<StockDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

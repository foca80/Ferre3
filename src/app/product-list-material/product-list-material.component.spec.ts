import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListMaterialComponent } from './product-list-material.component';

describe('ProductListMaterialComponent', () => {
  let component: ProductListMaterialComponent;
  let fixture: ComponentFixture<ProductListMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

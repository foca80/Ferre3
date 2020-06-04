import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../model/product';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list-material',
  templateUrl: './product-list-material.component.html',
  styles: []
})
export class ProductListMaterialComponent implements OnInit {

  displayedColumns =["id", "description", "price", "stock"];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(productService: ProductService) {
    productService.getProductList().subscribe(products =>  this.dataSource.data = products);
    console.log("Load Products");
   
   }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../model/product';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-list-material',
  templateUrl: './product-list-material.component.html',
  styles: []
})
export class ProductListMaterialComponent implements OnInit, AfterViewInit {

  displayedColumns =["id", "description", "price", "stock"];
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;

  constructor(productService: ProductService) {
    productService.getProductList().subscribe(products =>  this.dataSource.data = products);
    console.log("Load Products");
   
   }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
}

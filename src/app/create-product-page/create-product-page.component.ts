import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.css']
})
export class CreateProductPageComponent implements OnInit {

  displayedColumns = ['productName', 'productCode', 'prodRating', 'edit', 'delete'];

  Oberseproducts
  
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;
  
  constructor(private productService: ProductService) {  
   // this.productService.getProductList().subscribe(products => this.products = products);
  }

 
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
    
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
     ngOnInit() {
      //this.dataSource = this.products;
      this.dataSource.paginator = this.paginator;
  
    }
}

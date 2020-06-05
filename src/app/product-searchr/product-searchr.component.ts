import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-searchr',
  templateUrl: './product-searchr.component.html',
  styleUrls: ['./product-searchr.component.css']
})
export class ProductSearchrComponent implements OnInit {

  product : Observable<any>;

  constructor(public productService : ProductService ) {}

  ngOnInit(): void {
   this.reload();
  }
  reload(){
    this.product = this.productService.getProduct(1);//probando
    console.log("Producto:"+ this.product)  
  }

}

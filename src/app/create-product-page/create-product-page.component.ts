import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Type } from '../model/type';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product-page.component.html',
  styleUrls: ['./create-product-page.component.css']
})

export class CreateProductPageComponent implements OnInit {

  product: Product = new Product();
  //types: Observable<Type>;
  types : Type[];
  mensaje : String;

  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    //cargando types
    this.cargando();
  }

  cargando(){
    console.log("Cargando tipos")
    this.productService.getTypes().subscribe(types => this.types = types);
    console.log(this.types);
  }

  save(){
     console.log(this.product);
     this.productService.createProduct(this.product).subscribe(
       data => this.router.navigate(['/list'])
     );

  }

  compararTipo(o1:Type, o2:Type) : boolean{
    if (o1===undefined && o2===undefined){
      return true;
    }
     return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.idType === o2.idType 
  }
  
  changeType(evt) {
      alert("Hola: " + this.product.type.idType);
      this.mensaje = this.product.type.description;

  }

}

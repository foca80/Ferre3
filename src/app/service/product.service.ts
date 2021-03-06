import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; //importar a mano / ojo
import { Observable, of, throwError, from } from 'rxjs';
import { Product } from '../model/product';
import { Type } from '../model/type';
import { map, catchError } from 'rxjs/operators';
import { URL_SERVICES } from '../config/config';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private urlBase = URL_SERVICES+ '/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'}); //definir a mano
  //inyectar http, también importarlo en app.module.ts
  constructor(private http: HttpClient) { }

  getProduct(id: number) : Observable<any>{
    console.log("enviando rest get product");
    console.log(this.urlBase+ '/producto/'+ id);
    return this.http.get(this.urlBase+ '/producto/'+ id);
  }

  createProduct(product:Object) : Observable<Object>{
    return this.http.post(this.urlBase+'/product', product, {headers:this.httpHeaders});//enviando el product a REST
  }

  getProductList(): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase+ "/products");
    return this.http.get(this.urlBase+ '/products').pipe(
       map(response => response as Product[])
    );   

  }

  getProductsListDescripcion(descripcion:String) : Observable<any>{
    console.log("Llamando al REST Nombre: " + this.urlBase + "/productos/"+descripcion)
    return this.http.get(this.urlBase+ "/productos/"+ descripcion).pipe( 
      map(response => response as Product[]),
      catchError(e => {
        alert(e.status+ ":" + e.error.message)
      return throwError;
      })
    );
  }

  getTypes() : Observable<any>{
    console.log("Llamando a REST: " + this.urlBase+ "/types");
    return this.http.get(this.urlBase+ '/types').pipe(
       map(response => response as Type[])
    );   
  }
}

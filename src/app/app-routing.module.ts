import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';
import { ProductListMaterialComponent } from './product-list-material/product-list-material.component';


const routes: Routes = [
                        {path: "new", component:CreateProductComponent},
                        {path: "list", component: ProductListComponent},
                        {path: "boxlist", component: CreateProductPageComponent},
                        {path: "listMaterial", component: ProductListMaterialComponent},
                        {path: '', redirectTo: 'customer', pathMatch:'full'}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

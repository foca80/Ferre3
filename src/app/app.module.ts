import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//add Paginator hand Angular v9.0
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
//end add paginator
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';
//REST Forms hand
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//add ReactiveFormsModule
//Datepicker hand
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//end Datepicker
import { CreateProductPageComponent } from './create-product-page/create-product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductListComponent,
    CreateProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule, // Date add hand
    MatNativeDateModule,  //Date add hand
    ReactiveFormsModule, // Paginator add hand
    MatButtonModule, // Paginator add hand
    MatIconModule, // Paginator add hand
    MatSortModule, // Paginator add hand
    MatTableModule, // Paginator add hand
    MatTooltipModule, // Paginator add hand
    MatPaginatorModule // Paginator add hand
  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'es-PE'}],  //add Date hand
  bootstrap: [AppComponent]
})
export class AppModule { }

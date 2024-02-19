import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
    { path: '', component:  ProductsComponent}, 
    { path: 'products', component:  ProductsComponent},
    { path: 'create-product', component:  CreateProductComponent}, 
    { path: 'update-product', component:  UpdateProductComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class ProductsRoutingModule{}
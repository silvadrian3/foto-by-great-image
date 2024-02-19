import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromosComponent } from './components/promos/promos.component';
import { CreatePromoComponent } from './components/create-promo/create-promo.component';
import { UpdatePromoComponent } from './components/update-promo/update-promo.component';

const routes: Routes = [
    { path: '', component:  PromosComponent}, 
    { path: 'promos', component:  PromosComponent},
    { path: 'create-promo', component:  CreatePromoComponent}, 
    { path: 'update-promo', component:  UpdatePromoComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class PromosRoutingModule{}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddonsComponent } from './components/addons/addons.component';
import { CreateAddonsComponent } from './components/create-addons/create-addons.component';
import { UpdateAddonsComponent } from './components/update-addons/update-addons.component';

const routes: Routes = [
    { path: '', component:  AddonsComponent}, 
    { path: 'addons', component:  AddonsComponent},
    { path: 'create-addons', component:  CreateAddonsComponent}, 
    { path: 'update-addons', component:  UpdateAddonsComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class AddonsRoutingModule{}
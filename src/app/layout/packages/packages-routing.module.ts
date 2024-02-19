import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './components/packages/packages.component';
import { CreatePackageComponent } from './components/create-package/create-package.component';
import { UpdatePackageComponent } from './components/update-package/update-package.component';

const routes: Routes = [
    { path: '', component:  PackagesComponent}, 
    { path: 'packages', component:  PackagesComponent},
    { path: 'create-package', component:  CreatePackageComponent}, 
    { path: 'update-package', component:  UpdatePackageComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class PackagesRoutingModule{}
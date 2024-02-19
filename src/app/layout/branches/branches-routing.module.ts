import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesComponent } from './components/branches/branches.component';
import { CreateBranchComponent } from './components/create-branch/create-branch.component';
import { UpdateBranchComponent } from './components/update-branch/update-branch.component';

const routes: Routes = [
    { path: '', component:  BranchesComponent}, 
    { path: 'branches', component:  BranchesComponent},
    { path: 'create-branch', component:  CreateBranchComponent}, 
    { path: 'update-branch', component:  UpdateBranchComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class BranchesRoutingModule{}
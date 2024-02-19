import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
// import { CreateUserComponent } from './components/create-user/create-user.component';
// import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
    { path: '', component:  PhotosComponent}, 
    { path: 'photos', component:  PhotosComponent},
    // { path: 'create-user', component:  CreateUserComponent}, 
    // { path: 'update-user', component:  UpdateUserComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class PhotosRoutingModule{}
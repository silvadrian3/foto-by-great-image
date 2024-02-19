import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent} from './components/services/services.component';
import { CreateServiceComponent} from './components/create-service/create-service.component';
import { UpdateServiceComponent} from './components/update-service/update-service.component';
const routes: Routes = [
    { path: '', component:  ServicesComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'create-service', component: CreateServiceComponent},
    { path: 'update-service', component: UpdateServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class ServicesRoutingModule{}
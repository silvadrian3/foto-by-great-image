import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [{
    path: '', component: LayoutComponent,
    children: [
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        { path: 'booking', loadChildren: './active-bookings/active-bookings.module#ActiveBookingsModule'},
        { path: 'services', loadChildren: './services/services.module#ServicesModule'},
        { path: 'packages', loadChildren: './packages/packages.module#PackagesModule'},
        { path: 'addons', loadChildren: './addons/addons.module#AddonsModule'},
        { path: 'user-management', loadChildren: './user-management/user-management.module#UserManagementModule'},
        { path: 'photos', loadChildren: './photos/photos.module#PhotosModule'},
        { path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
        { path: 'products', loadChildren: './products/products.module#ProductsModule'},
        { path: 'branches', loadChildren: './branches/branches.module#BranchesModule'},
        { path: 'promos', loadChildren: './promos/promos.module#PromosModule'},
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }

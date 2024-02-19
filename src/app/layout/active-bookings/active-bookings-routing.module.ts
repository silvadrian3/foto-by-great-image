import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveBookingsComponent} from './components/active-bookings/active-bookings.component';
import { CreateBookingComponent} from './components/create-booking/create-booking.component';
const routes: Routes = [
    { path: '', component:  ActiveBookingsComponent},
    { path: 'create-booking', component: CreateBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class ActiveBookingsRoutingModule{}
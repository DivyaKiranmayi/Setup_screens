import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAlcComponent } from '../agency-location-codes/create-alc/create-alc.component';
import { ManageAlcComponent } from '../agency-location-codes/manage-alc/manage-alc.component';


const routes: Routes = [
                        {path:'manage-alc', component: ManageAlcComponent},
                        {path:'create-alc', component: CreateAlcComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
// export const routingComponents = [{ManageAlcComponent,CreateAlcComponent}];

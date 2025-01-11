import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HealthCheckComponent } from './health-check/health-check.component';
import { NgosComponent } from './ngos/ngos.component';
import { VetsComponent } from './vets/vets.component';
import { FindapetComponent } from './findapet/findapet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'health-check', component: HealthCheckComponent },
  { path: 'ngos', component: NgosComponent },
  { path: 'vets', component: VetsComponent },
  { path: 'findpet', component: FindapetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { PlantsComponent } from './plants/plants.component';
import { PotsComponent } from './pots/pots.component';
import { PlantsCareComponent } from './plants-care/plants-care.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Home",component:HomeComponent},
  {path:"Plants",component:PlantsComponent},
  {path:"Pots",component:PotsComponent},
  {path:"PlantsCare",component:PlantsCareComponent},
  {path:"LogIn",component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

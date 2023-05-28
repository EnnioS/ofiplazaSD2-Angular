import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FoodcourtComponent } from './pages/foodcourt/foodcourt.component';
import { WorkplaceComponent } from './pages/workplace/workplace.component';
import { Eops1Component } from './pages/eops1/eops1.component';
import { Eops2Component } from './pages/eops2/eops2.component';
import { Eops3Component } from './pages/eops3/eops3.component';
import { Eops4Component } from './pages/eops4/eops4.component';

const routes: Routes = [{
  path:'',component:LayoutComponent,
  children:[
    {path:'inicio', component:HomeComponent},
    {path:'nosotros', component:NosotrosComponent},
    {path:'contacto', component:ContactoComponent},
    {path:'food-court', component:FoodcourtComponent},
    {path:'workplace', component:WorkplaceComponent},
    {path:'eops1', component:Eops1Component},
    {path:'eops2', component:Eops2Component},
    {path:'eops3', component:Eops3Component},
    {path:'eops4', component:Eops4Component},
    {path:'**', redirectTo:'inicio', pathMatch:'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

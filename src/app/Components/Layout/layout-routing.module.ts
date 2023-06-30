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
    {path:'', title:"Inicio - Ofiplaza San Dionisio", component:HomeComponent},
    {path:'inicio', title:"Inicio - Ofiplaza San Dionisio", component:HomeComponent},
    {path:'nosotros', title:"Nosotros - Ofiplaza San Dionisio", component:NosotrosComponent},
    {path:'contacto', title:"Contácanos - Ofiplaza San Dionisio", component:ContactoComponent},
    {path:'food-court', title:"Foodcourt - Ofiplaza San Dionisio", component:FoodcourtComponent},
    {path:'workplace', title:"workplace - Ofiplaza San Dionisio", component:WorkplaceComponent},
    {path:'eops1', title:"EOPS1 - Ofiplaza San Dionisio", component:Eops1Component},
    {path:'eops2', title:"EOPS2 - Ofiplaza San Dionisio", component:Eops2Component},
    {path:'eops3', title:"EOPS3 - Ofiplaza San Dionisio", component:Eops3Component},
    {path:'eops4', title:"EOPS4 - Ofiplaza San Dionisio", component:Eops4Component},
    {path:'**', redirectTo:'inicio', pathMatch:'full'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

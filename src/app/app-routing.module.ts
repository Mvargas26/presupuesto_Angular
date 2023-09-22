import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {path:'',redirectTo:'/ingresarPresupuesto',pathMatch:'full'}, //si el ususario ingresa a raiz, lo lleva a ruta ingresarPresupuesto
  {path:'ingresarPresupuesto',component:IngresarPresupuestoComponent},
  {path:'gastos',component:GastosComponent},
  
  {path:'**',redirectTo:'/ingresarPresupuesto',pathMatch:'full'} //si mete ruta que no existe, manda a ingresarPresupuesto, ojo va al final 100pre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

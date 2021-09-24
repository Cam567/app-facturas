import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFacturaComponent } from './form-factura/form-factura.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoFacturasComponent } from './listado-facturas/listado-facturas.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path:"", redirectTo:"inicio", pathMatch:"full"},
  {path:"inicio", component:InicioComponent},
  {path:"facturas", component:ListadoFacturasComponent},
  {path:"factura/:facturaId", component:FormFacturaComponent},
  {path:"factura", component:FormFacturaComponent},
  {path:"**", component:PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

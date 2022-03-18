import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';


export const routes: Routes = [
  {path: '', redirectTo: 'extrato', pathMatch: 'full'}, // Redireciona para a página de extrato
  {path: 'extrato', component: ExtratoComponent},
  {path: 'nova-transferencia', component: NovaTransferenciaComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule],
})

export class AppRoutingModule{}

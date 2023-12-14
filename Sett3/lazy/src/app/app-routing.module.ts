import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'primo',
        loadChildren: () => import('./components/primo/primo-routing.module').then(m => m.PrimoRoutingModule)
    },
    {
        path: 'secondo',
        loadChildren: () => import('./components/secondo/secondo-routing.module').then(m => m.SecondoRoutingModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

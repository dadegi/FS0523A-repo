import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondoComponent } from './secondo.component';

const routes: Routes = [
    {
        path: '',
        component: SecondoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SecondoRoutingModule {}

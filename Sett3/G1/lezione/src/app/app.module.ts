import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [
    {
        path: 'componente1',
        component: Componente1Component
    },
    {
        path: 'componente2',
        component: Componente2Component
    }
]

@NgModule({
    declarations: [
        AppComponent,
        Componente1Component,
        Componente2Component,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

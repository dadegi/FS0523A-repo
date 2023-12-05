import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TdFormComponent } from './components/td-form/td-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TdForm2Component } from './components/td-form2/td-form2.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tdform',
        component: TdFormComponent
    },
    {
        path: 'tdform2',
        component: TdForm2Component
    },
    {
        path: 'reactiveform',
        component: ReactiveFormComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        TdFormComponent,
        ReactiveFormComponent,
        TdForm2Component,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

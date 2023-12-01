import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Route[] = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path: 'completati',
        component: CompletatiComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    declarations: [
        AppComponent,
        TodosComponent,
        CompletatiComponent,
        NavbarComponent,
    ],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

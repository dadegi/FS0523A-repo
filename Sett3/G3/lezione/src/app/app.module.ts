import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { NuovoProdottoComponent } from './components/nuovo-prodotto/nuovo-prodotto.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'prodotti',
        component: ProdottiComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'nuovoProdotto',
        component: NuovoProdottoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ProdottiComponent,
        NuovoProdottoComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

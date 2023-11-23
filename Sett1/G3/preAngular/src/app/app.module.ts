import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { SecondoComponent } from './secondo/secondo.component';

@NgModule({
    declarations: [AppComponent, ProvaComponent, SecondoComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

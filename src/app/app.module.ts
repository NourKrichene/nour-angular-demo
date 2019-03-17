import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {NavComponent} from './layouts/navbar/nav.component';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {SharedModule} from './shared';
import {FooterComponent} from './layouts/footer/footer.component';

@NgModule({
    declarations: [AppComponent,
        ContentLayoutComponent,
        FooterComponent,
        NavComponent
    ],
    imports: [
        BrowserModule,
        ButtonModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

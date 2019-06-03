import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/about.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [AboutComponent],
    imports: [
        AboutRoutingModule,
        CommonModule,
        StoreModule.forRoot({
            favorite: reducer
        })
    ]
})
export class AboutModule {
}

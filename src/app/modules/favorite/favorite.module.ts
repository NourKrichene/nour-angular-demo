import { NgModule } from '@angular/core';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/favorite.reducer';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [FavoriteComponent],
    imports: [
        FavoriteRoutingModule,
        CommonModule,
        StoreModule.forRoot({
            favorite: reducer
        })
    ]
})
export class FavoriteModule {
}

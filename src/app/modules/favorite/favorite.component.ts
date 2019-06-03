import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FavoriteState } from './store/favorite.state';
import { Favorite } from './models/favorite.model';
import * as FavoriteActions from './store/actions/favorite.actions';

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})


export class FavoriteComponent implements OnInit {
    favorites: Observable<Favorite[]>;

    constructor(private store: Store<FavoriteState>) {
        this.favorites = store.select('favorite');
    }

    ngOnInit() {
    }

    addFavorite(name, url) {
        this.store.dispatch(new FavoriteActions.AddFavorite({ name, url }));
    }

    delFavorite(index) {
        this.store.dispatch(new FavoriteActions.RemoveFavorite(index));
    }

}





import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
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

    // Section 2
    constructor(private store: Store<FavoriteState>) {
        this.favorites = store.select('favorite');
    }
    addFavorite(name, url) {
        this.store.dispatch(new FavoriteActions.AddFavorite({name: name, url: url}) );
      }

    ngOnInit() {
    }

}





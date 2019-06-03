import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { AboutState } from './store/about.state';
import { Favorite } from './models/favorite.model';
import * as FavoriteActions from './store/actions/favorite.actions';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {
    favorites: Observable<Favorite[]>;

    // Section 2
    constructor(private store: Store<AboutState>) {
        this.favorites = store.select('favorite');
    }
    addFavorite(name, url) {
        this.store.dispatch(new FavoriteActions.AddFavorite({name: name, url: url}) )
      }

    ngOnInit() {
    }

}





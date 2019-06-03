import { Action } from '@ngrx/store';
import * as FavoriteActions from '../actions/favorite.actions';
import { Favorite } from '../../models/favorite.model';

// Section 1
const initialState: Favorite = {
    name: 'Initial favorite url',
    url: 'http://google.com'
}

// Section 2
export function reducer(state: Favorite[] = [initialState], action: FavoriteActions.Actions) {

    // Section 3
    switch(action.type) {
        case FavoriteActions.ADD_FAVORITE:
            return [...state, action.payload];
        default:
            return state;
    }
}
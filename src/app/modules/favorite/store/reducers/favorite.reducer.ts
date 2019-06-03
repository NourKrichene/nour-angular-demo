import { Action } from '@ngrx/store';
import * as FavoriteActions from '../actions/favorite.actions';
import { Favorite } from '../../models/favorite.model';

const initialState: Favorite = {
    name: 'Initial favorite url',
    url: 'http://google.com'
};

export function reducer(state: Favorite[] = [initialState], action: FavoriteActions.Actions) {

    switch (action.type) {
        case FavoriteActions.ADD_FAVORITE:
            return [...state, action.payload];
        default:
            return state;
    }
}
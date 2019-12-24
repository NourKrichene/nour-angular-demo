import * as FavoriteActions from '../actions/favorite.actions';
import { Favorite } from '../../models/favorite.model';

const initialState: Favorite = {
    name: 'Initial favorite website: google',
    url: 'http://google.com'
};

export function reducer(state: Favorite[] = [initialState], action: FavoriteActions.Actions) {

    switch (action.type) {
        case FavoriteActions.ADD_FAVORITE:
            return [...state, action.payload];

        case FavoriteActions.REMOVE_FAVORITE:
            state.splice(action.payload, 1);
            return state;

        default:
            return state;
    }
}

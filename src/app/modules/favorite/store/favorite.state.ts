import { Favorite } from '../models/favorite.model';

export interface FavoriteState {
  readonly favorite: Favorite[];
}

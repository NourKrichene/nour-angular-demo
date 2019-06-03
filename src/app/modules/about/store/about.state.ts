import { Favorite } from '../models/favorite.model';

export interface AboutState {
  readonly favorite: Favorite[];
}

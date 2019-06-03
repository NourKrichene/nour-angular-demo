import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Favorite } from '../../models/favorite.model';


// Section 2
export const ADD_FAVORITE = '[FAVORITE] Add';
export const REMOVE_FAVORITE = '[FAVORITE] Remove';

// Section 3
export class AddFavorite implements Action {
  readonly type = ADD_FAVORITE;

  constructor(public payload: Favorite) { }
}

export class RemoveFavorite implements Action {
  readonly type = REMOVE_FAVORITE;

  constructor(public payload: number) { }
}

// Section 4
export type Actions = AddFavorite | RemoveFavorite;

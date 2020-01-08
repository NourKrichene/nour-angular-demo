import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./../../modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./../../modules/home/home.module').then(m => m.HomeModule)
    },

    {
        path: 'cards',
        loadChildren: () => import('./../../modules/cards/cards.module').then(m => m.CardsModule)
    },

    {
        path: 'form',
        loadChildren: () => import('./../../modules/form/form.module').then(m => m.FormModule)
    },

    {
        path: 'files',
        loadChildren: () => import('./../../modules/files/files.module').then(m => m.FilesModule)
    },

    {
        path: 'favorite',
        loadChildren: () => import('./../../modules/favorite/favorite.module').then(m => m.FavoriteModule)
    }

];

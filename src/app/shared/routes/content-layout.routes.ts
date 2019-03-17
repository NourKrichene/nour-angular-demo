import {Routes} from '@angular/router';

export const CONTENT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
    },

    {
        path: 'cards',
        loadChildren: './modules/cards/cards.module#CardsModule'
    },

    {
        path: 'form',
        loadChildren: './modules/form/form.module#FormModule'
    },

    {
        path: 'files',
        loadChildren: './modules/files/files.module#FilesModule'
    },

    {
        path: 'about',
        loadChildren: './modules/about/about.module#AboutModule'
    }

];

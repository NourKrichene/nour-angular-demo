import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ContentLayoutComponent} from './layouts/content-layout/content-layout.component';
import {CONTENT_ROUTES} from './shared/routes/content-layout.routes';

const routes: Routes = [

    {
        path: '',
        component: ContentLayoutComponent,
        children: CONTENT_ROUTES
    },

    // Fallback when no prior routes is matched
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

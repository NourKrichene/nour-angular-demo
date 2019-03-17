import {NgModule} from '@angular/core';
import {FilesRoutingModule} from './files-routing.module';
import {FilesComponent} from './files.component';
import {SharedModule} from '../../shared';


@NgModule({
    declarations: [FilesComponent],
    imports: [
        FilesRoutingModule,
        SharedModule
    ]
})
export class FilesModule {
}

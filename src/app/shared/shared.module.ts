import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DropFileDirective} from './directives/dropFile.directive';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule

    ],
    declarations: [DropFileDirective],
    exports: [
        CommonModule,
        DropFileDirective,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class SharedModule {
}

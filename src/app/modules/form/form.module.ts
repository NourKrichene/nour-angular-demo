import {NgModule} from '@angular/core';
import {FormComponent} from './form.component';
import {FormRoutingModule} from './form-routing.module';
import {SharedModule} from '../../shared';


@NgModule({
    declarations: [FormComponent],
    imports: [
        FormRoutingModule,
        SharedModule

    ]
})
export class FormModule {
}

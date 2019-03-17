import {NgModule} from '@angular/core';
import {CardsRoutingModule} from './cards-routing.module';
import {CardsComponent} from './cards.component';


@NgModule({
    declarations: [CardsComponent],
    imports: [
        CardsRoutingModule
    ]
})
export class CardsModule {
}

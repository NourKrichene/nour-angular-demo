import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
    chosenCard = 'No card was selected';

    constructor() {
    }

    ngOnInit() {
    }


    onClickMe(cardNumber) {


        switch (cardNumber) {
            case '1': {
                this.chosenCard = 'First card selected';
                break;
            }
            case '2': {
                this.chosenCard = 'Second card selected';
                break;
            }
            case '3': {
                this.chosenCard = 'Third card selected';
                break;
            }

        }
        }

    }

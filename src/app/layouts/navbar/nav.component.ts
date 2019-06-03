import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    navItems = [
        {link: '/home', title: 'Home'},
        {link: '/cards', title: 'Cards'},
        {link: '/form', title: 'Form'},
        {link: '/files', title: 'Files'},
        {link: '/favorite', title: 'Favorite'}
    ];

    constructor() {
    }

    ngOnInit() {

    }


}

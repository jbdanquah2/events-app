import { Component, Input, Output, EventEmitter } from '@angular/core'
// import { EventEmitter } from 'protractor';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px}
        #searchForm { margin-right: 10px}
        @media (max-width: 820px) {
            #searchForm {display: none}
        }
    `]
})

export class NavBarComponent {
   
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: [ './user-details.component.css' ]
})
export class UserDetailsComponent implements OnInit {
    user;

    constructor(private router: Router) {}

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        localStorage.removeItem('user');
        this.router.navigate([ '/login' ]);
    }
}

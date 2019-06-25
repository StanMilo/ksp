import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: [ './user-login.component.css' ]
})
export class UserLoginComponent implements OnInit {
    userLoginForm: FormGroup;
    post: any;
    name: string = '';
    password: string = '';
    requiredField: string = 'enter user name';
    user;

    constructor(private fb: FormBuilder, private router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user != null) {
            this.router.navigate([ '/details' ]);
        }
        this.userLoginForm = fb.group({
            name: [ null, Validators.required ],
            password: [ null, Validators.compose([ Validators.required, Validators.minLength(4) ]) ]
        });
    }

    ngOnInit() {}

    onSubmit(formData) {
        // TODO change with HttpClient
        // console.log(formData);
        var url = `http://localhost:4001/auth?username=${formData.name}&password=${formData.password}`;

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                var user = res[0];
                if (user == undefined) {
                    console.log('show error/wrong user pass');
                } else {
                    localStorage.setItem('user', JSON.stringify(user));
                    this.router.navigate([ '/details' ]);
                }
            });
    }
}

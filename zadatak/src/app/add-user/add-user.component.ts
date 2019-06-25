import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: [ './add-user.component.css' ]
})
export class AddUserComponent implements OnInit {
    addUserForm: FormGroup;
    username: string = '';
    first_name: string = '';
    last_name: string = '';
    password: string = '';
    adress: string = '';
    area_code: string = '';
    city: string = '';

    constructor(private fb: FormBuilder, private router: Router, private httpClient: HttpClient) {
        this.addUserForm = fb.group({
            username: [ null, Validators.required ],
            first_name: [ null, Validators.required ],
            last_name: [ null, Validators.required ],
            password: [ null, Validators.required ],
            adress: [ null, Validators.required ],
            area_code: [ null, Validators.required ],
            city: [ null, Validators.required ]
        });
    }

    ngOnInit() {}

    onSubmit(value) {
        var url = `http://localhost:4001/users-save`;

        var res = this.httpClient.post(url, value).subscribe(
            (response) => {
                console.log('success', response);
            },
            (error) => {
                alert(1234);
                console.log('error', error);
            }
        );
    }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
    { path: '', component: UserLoginComponent },
    { path: 'login', component: UserLoginComponent },
    { path: 'details', component: UserDetailsComponent },
    { path: 'add-user', component: AddUserComponent }
    // { path: ''}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

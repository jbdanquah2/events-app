import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl:'login.component.html',
    styles: [`
        em {
            float: right;
            color: red;
        }
    `]

})
export class LoginComponent {
    username: any
    password: any
    mouseoverLogin: boolean
    constructor(private authService:AuthService, private router:Router) {
    }
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
        console.log(formValues);   
    }
    cancel() {
        this.router.navigate(['events'])
    }
}

//import { OnInit , Input} from '@angular/core';
import { Component } from '@angular/core';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';

@Component({ 
    selector: 'app', 
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css'] 
 })

export class AppComponent {
  
     currentUser: any;
     constructor(
        public router: Router,
        //private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
     
/*
    ngOnInit() {
        /*this.registerForm = this.formBuilder.group({
            comment: []
        });*/
    



    // convenience getter for easy access to form fields
    //get f() { return this.registerForm.controls; }
/*
    onSubmit() {
        this.submitted = true;

        this.loading = true;*/
        /*
        this.userService.register(this.registerForm.value)
            .pipe(first())*/
            
   /* }
*/
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    //registerForm: FormGroup;
    loading = false;
    //submitted = false;
    //error: string;

}

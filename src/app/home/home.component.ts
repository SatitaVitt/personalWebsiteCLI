import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { Router } from '@angular/router';
import { Visitor } from '../visitor';

@Component({ 
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css','./addition.css'] 
})
export class HomeComponent {
    //currentUser: any;
    constructor(
        //private router: Router,
        //public name : string,
        //public type : string,
        //private formBuilder: FormBuilder,
    ) {
        
    }

    // type = ['recuriter', 'friends', 'anonymous'];
    // model = new Visitor('Your Name', this.type[2], 'github');
    // submitted = false;
    // ngOnInit() {  
    //     this.registerForm = this.formBuilder.group({
    //         comment: []
    //     });
    // }
    // // convenience getter for easy access to form fields
    // get f() { return this.registerForm.controls; }

    // onSubmit() {
    //     this.submitted = true;

    //     //this.loading = true;
    //     /*
    //     this.userService.register(this.registerForm.value)
    //         .pipe(first())*/
            
    // }
    // registerForm: FormGroup;
    // loading = false;
    // //submitted = false;
    // //remove when down
    // get diagnostic() { return JSON.stringify(this.model); }

 
    

    
}

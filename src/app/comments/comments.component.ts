import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({ 
    selector: 'app-comments', 
    templateUrl: 'comments.component.html',
    styleUrls: ['./comments.component.css'] 
 })
export class CommentsComponent {
    constructor(
        public router: Router,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            comment: []
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        this.loading = true;
        /*
        this.userService.register(this.registerForm.value)
            .pipe(first())*/
            
    }

    
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    //error: string;
    
}

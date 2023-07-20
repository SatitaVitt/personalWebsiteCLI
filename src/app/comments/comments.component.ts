import { HttpHeaders } from '@angular/common/http';
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
        // console.log("onSubmit");
        // console.log("submit - registerform", this.registerForm);

        this.submitted = true;
        this.loading = true;
        // const email = 'satita.ice.v@gmail.com';
        // const name = 'comments from your personal website!'
        // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        // this.http.post('https://formspree.io/asdlf7asdf',
        //     { name: name, replyto: email, message: this.registerForm.value.comment },
        //     { 'headers': headers }).subscribe(
        //     response => {
        //         console.log(response);
        //     }
        // );
        /*
        this.userService.register(this.registerForm.value)
            .pipe(first())*/
            
    }



    
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    //error: string;
    
}

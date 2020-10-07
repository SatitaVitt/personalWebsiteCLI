//import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { UserpageComponent } from './userpage';
import { CommentsComponent } from './comments';
import { SidebarModule } from 'ng-sidebar';
//import { BlogComponent } from './blog/blog.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { ScullyLibModule } from '@scullyio/ng-lib';
//import { routes } from './app.routing';

//import { FunFactComponent } from './fun-fact/fun-fact.component';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule, 
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        SidebarModule,
        CommonModule,
        RouterModule,
        //RouterModule.forRoot(routes),
        MarkdownModule.forRoot({ loader: HttpClient }),
        ScullyLibModule,
        //BrowserAnimationsModule,
        
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        UserpageComponent,
        CommentsComponent
        //BlogComponent,
        //FunFactComponent
    ],
    //schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
    
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);
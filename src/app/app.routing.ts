import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CommentsComponent } from './comments';
//import { FunFactComponent } from './fun-fact/fun-fact.component';
//import { FunfactsComponent } from './funfacts';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { UserpageComponent } from './userpage';
import { AuthGuard } from './_helpers';


const routes: Routes = [
    
    //{ path: '', component: HomeComponent , canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
    /*To control access to a route with the auth guard you add it to the canActivate array 
    in the route's configuration. The route guards in the canActivate array are run by Angular 
    to decide if the route can be "activated", if all of the route guards return true navigation 
    is allowed to continue, but if any of them return false navigation is cancelled.
    */
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'userpage', component: UserpageComponent , canActivate: [AuthGuard] },
    { path: 'comments', component: CommentsComponent},
    { path: 'blog', component: BlogComponent},
    //{ path: 'funfact', component: FunFactComponent},
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  

//export const AppRoutingModule = RouterModule.forRoot(routes);
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:() => import('../app/login/login.component').then( o=>o.LoginComponent)
    }
];

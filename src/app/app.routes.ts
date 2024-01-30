import { Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {TransactionsComponent} from "./pages/transactions/transactions.component";
import {ProfileComponent} from "./pages/profile/profile.component";

export const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"dashboard"
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"transactions",
    component:TransactionsComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
];

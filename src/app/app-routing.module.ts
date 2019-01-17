
import { CreateNewPatientComponent } from './create-new-patient/create-new-patient.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';



// order is imp
const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'welcome', component: WelcomeComponent},
    {path:'create-new-patient', component: CreateNewPatientComponent},
    {path:'SearchComponent', component: SearchComponent},
  {path:'**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

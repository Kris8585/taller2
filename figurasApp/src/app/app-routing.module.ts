import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SecureComponent } from './components/secure/secure.component';
import { ElementComponent } from './components/element/element.component';
import { PrincipalComponent } from './components/principal/principal.component'; 
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { RecoveryComponent } from './components/recovery/recovery.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationGuard } from './guards/authentication/authentication.guard';
import { ElementAdminComponent } from './components/element-admin/element-admin.component';
import { AuthorizationGuard } from './guards/authorization/authorization.guard';

const routes: Routes = [

  { path: 'about-us', component: AboutUsComponent },
  {  path: 'account', component: AccountComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'recovery', component: RecoveryComponent },
      { path: 'register', component: RegisterComponent },
    ]  },
  { path: 'secure', component: SecureComponent,canActivate:[AuthenticationGuard], children: [
      { path: 'principal', component: PrincipalComponent },
      {  path: 'element/:elementName', component: ElementComponent  },
      {  path: 'element/:elementName/edit', component: ElementAdminComponent,
      canActivate: [AuthorizationGuard], data: {role: 'Math'}  },
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'secure/principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { CustomeMobInputDirective } from './custome-mob-input.directive';
import { UserListComponent } from './user-list/user-list.component';
import { AngularFireModule } from 'angularfire2'
import { environment } from 'src/environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserAccountComponent } from './services/user-account/user-account.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    CustomeMobInputDirective,
    UserListComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore, CookieService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { firebase,firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FirebaseAppModule } from '@angular/fire/app';
import { AngularFireModule } from "@angular/fire/compat";
// import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from "@angular/fire/compat/auth";


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
  ],
  // tosUrl: '<your-tos-link>',
  // privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};



@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    CompetencesComponent,
    ProjetsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    AngularFireAuthModule,
    FirebaseAppModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

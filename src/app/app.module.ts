import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BodySecondaryComponent } from './body-secondary/body-secondary.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { SendComponent } from './send/send.component';
import { WalletComponent } from './wallet/wallet.component';
import { FooterComponent } from './footer/footer.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodySecondaryComponent,
    TimelineComponent,
    WelcomeComponent,
    AdminComponent,
    UserPageComponent,
    UserNavComponent,
    SendComponent,
    WalletComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './ui/header/header.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ProfileComponent } from './auth/profile/profile.component';
import { StoreComponent } from './components/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ResetComponent } from './auth/reset/reset.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './components/store/filter.pipe';
import { FooterComponent } from './ui/footer/footer.component';
import { HomePipe } from './components/home/home.pipe';
import { OrderdeliveryComponent } from './components/orderdelivery/orderdelivery.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { drugsReducer, DrugsReducer, DRUGS_REDUCER_NODE } from './drugs.reducer';
import { DrugsStoreService } from './drugs-store.service';
import { SwiperModule } from 'swiper/angular';
import { AdvertDrugsComponent } from './components/home/advert-drugs/advert-drugs.component';
import { TestComponent } from './components/tests/test.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CartComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    StoreComponent,
    ResetComponent,
    FilterPipe,
    FooterComponent,
    HomePipe,
    HomeComponent,
    OrderdeliveryComponent,
    AdvertDrugsComponent,
    TestComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    NgxPaginationModule,
    MatGridListModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    HttpClientModule,
    FormsModule,
    SwiperModule,
    StoreModule.forRoot({drugs:DrugsReducer},{

    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(DRUGS_REDUCER_NODE,drugsReducer)
  
  ],
  
  providers: [
    ScreenTrackingService,UserTrackingService,
    DrugsStoreService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

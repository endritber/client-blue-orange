import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule} from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartService } from './services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './services/store.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CustomInterceptor } from './services/custom.interceptor';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { UserComponent } from './pages/user/user.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmAddressComponent } from './pages/checkout/confirm-address/confirm-address.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserAddressEditComponent } from './pages/user/user-address-edit/user-address-edit.component';
import { UserAddressCreateComponent } from './pages/user/user-address-create/user-address-create.component';
import { ItemsModalComponent } from './pages/user/items-modal/items-modal.component';
import { SuccessUrlComponent } from './pages/checkout/success-url/success-url.component';
import { FailedUrlComponent } from './pages/checkout/failed-url/failed-url.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsHeaderComponent,
    ProductBoxComponent,
    FiltersComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
    UserComponent,
    SignupComponent,
    CheckoutComponent,
    ConfirmAddressComponent,
    UserEditComponent,
    UserAddressEditComponent,
    UserAddressCreateComponent,
    ItemsModalComponent,
    SuccessUrlComponent,
    FailedUrlComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule
  ],
  providers: [
    CartService,
    StoreService,
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor,
      multi: true
    },
    { 
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

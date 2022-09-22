import { Component, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/components/header/header.component';
import { RegisterComponent } from 'src/components/register/register.component';
import { DataService } from 'src/services/data.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PhonePipe } from './phone.pipe';
import { SearchPipe } from './search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChangecolorDirective } from './changecolor.directive';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { ProfileComponent } from './profile/profile.component';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProductsComponent,
    CartComponent,
    DropdownComponent,
    PhonePipe,
    SearchPipe,
    ChangecolorDirective,
    NumbersOnlyDirective,
    ProfileComponent,
    AsyncpipeComponent
    // components
    //directives
    //pipes
  ],
  imports: [
    //modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:"products",
        component:ProductsComponent
      
      },
      {
        path:"cart",
        component:CartComponent
      
      },
      {
        path:"profile",
        component:ProfileComponent
      
      },
      {
        path:"",
        component:LoginComponent
      
      },
    ])
  ],
  providers: [
 //services
 DataService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

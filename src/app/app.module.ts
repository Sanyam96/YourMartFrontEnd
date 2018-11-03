import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule  } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes : Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'signin', component: SigninComponent},
  {path : 'image', component: ImageUploaderComponent},
  {path : 'product/image', component: ImageUploaderComponent},
  {path : 'product', component: AddProductComponent},
  {path : 'product/:id',component:ProductDetailComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ImageUploaderComponent,
    AddProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

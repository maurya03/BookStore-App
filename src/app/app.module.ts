import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    
import { ToastrModule } from 'ngx-toastr';

import {MatCardModule} from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { DisplaybookComponent } from './component/displaybook/displaybook.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { CartComponent } from './component/cart/cart.component';
 
import { TopnavComponent } from './component/topnav/topnav.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { CategoryComponent } from './admin/category/category.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { ManageCategoryComponent } from './admin/manage-category/manage-category.component';
import { ManageUserComponent } from './admin/manage-user/manage-user.component';
import { ShowBooksComponent } from './admin/show-books/show-books.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { EditBookComponent } from './admin/edit-book/edit-book.component';
import { ViewComponent } from './admin/manage-user/view/view.component';
import { EditComponent } from './admin/manage-user/edit/edit.component';
import { DeleteComponent } from './admin/manage-user/delete/delete.component';
import { AddComponent } from './admin/manage-user/add/add.component';
import { ViewCategoryComponent } from './admin/category/view-category/view-category.component';
import { DeleteCategoryComponent } from './admin/category/delete-category/delete-category.component';
import { EditCategoryNewComponent } from './admin/category/edit-category-new/edit-category-new.component';
import { FilterPipe } from './shared/filter.pipe';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { AboutComponent } from './component/about/about.component';
 

 
 
 
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    DisplaybookComponent,
    ToolbarComponent,
    CartComponent,
    
    TopnavComponent,
    WishlistComponent,
    AddBookComponent,
    CategoryComponent,
    EditBookComponent,
    EditCategoryComponent,
    ManageCategoryComponent,
    ManageUserComponent,
    ShowBooksComponent,
    NavbarComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    AddComponent,
    ViewCategoryComponent,
    DeleteCategoryComponent,
    EditCategoryNewComponent,
    FilterPipe,
    LoginAdminComponent,
    CheckoutComponent,
    HomeComponent,
    ErrorComponent,
    AboutComponent
     
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatSnackBarModule
     
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

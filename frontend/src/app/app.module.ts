import { NgModule } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatSidenavModule } from "@angular/material/sidenav"
import { MatCardModule } from "@angular/material/card"
import { MatListModule } from "@angular/material/list"
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AppRoutingModule } from '@/app-routing.module'
import { AppComponent } from '@/app.component'

import { HeaderComponent } from '@/components/templates/header/header.component'
import { FooterComponent } from "@/components/templates/footer/footer.component"
import { NavComponent } from "@/components/templates/nav/nav.component"

import { ProductCreateComponent } from '@/components/products/product-create/product-create.component'

import { HomeComponent } from '@/views/home/home.component'
import { ProductCrudComponent } from '@/views/product-crud/product-crud.component'

import { RedDirective } from '@/directives/red.directive'
import { ForDirective } from '@/directives/for.directive'

import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

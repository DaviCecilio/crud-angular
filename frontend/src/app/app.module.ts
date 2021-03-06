import { NgModule, LOCALE_ID } from '@angular/core'

import { FormsModule } from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
import { HttpClientModule } from "@angular/common/http"

import { MatSidenavModule } from "@angular/material/sidenav"
import { MatCardModule } from "@angular/material/card"
import { MatListModule } from "@angular/material/list"
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

import { AppRoutingModule } from '@/app-routing.module'
import { AppComponent } from '@/app.component'

import { HeaderComponent } from '@/components/templates/header/header.component'
import { FooterComponent } from "@/components/templates/footer/footer.component"
import { NavComponent } from "@/components/templates/nav/nav.component"
import { ProductRead2Component } from '@/components/products/product-read2/product-read2.component'
import { ProductCreateComponent } from '@/components/products/product-create/product-create.component'
import { ProductReadComponent } from '@/components/products/product-read/product-read.component'

import { HomeComponent } from '@/views/home/home.component'
import { ProductCrudComponent } from '@/views/product-crud/product-crud.component'

import { RedDirective } from '@/directives/red.directive'
import { ForDirective } from '@/directives/for.directive';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component'

registerLocaleData(localePt)

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
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
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
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-br'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

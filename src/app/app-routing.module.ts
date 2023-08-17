import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NotFoundFageComponent } from './not-found-fage/not-found-fage.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo:'products', pathMatch: 'full'},
  {path: 'products', component:ProductListComponent},
  {path: 'about-page', component: AboutComponent},
  {path:'product-create', component:ProductCreateComponent},
  {path: 'product-update/:id', component:ProductUpdateComponent},
  {path:'product-detail/:id', component:ProductDetailComponent},
  {path:'**', component:NotFoundFageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

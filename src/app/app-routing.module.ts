
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceRoutingModule } from './annonce/annonce-routing.module';
import { TesttodoComponent } from './testtodo/testtodo.component';




const routes: Routes = [


  {path:"home", component: HomeComponent}, 
  {path:"Product", component: ProductComponent},
  {path :" ", redirectTo:'testtodo', pathMatch:"full"},
  {path: "annonce",component: AnnonceComponent},
  {path:"testtodo",component: TesttodoComponent},
  {path:"**",component:NotfoundComponent},
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,AnnonceRoutingModule]
})
export class AppRoutingModule { }

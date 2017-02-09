import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from '../one/one.component';
import { AdminComponent } from '../admin/admin.component';
import { DetailsComponent } from '../details/details.component';
const routes: Routes = [
  {
    path: '',
   // children: []
   component: OneComponent
  },
  {
    path:'one',
    component: OneComponent
  },
   {
    path:'details/:id',
    component: DetailsComponent
  },  
  {
    path:'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

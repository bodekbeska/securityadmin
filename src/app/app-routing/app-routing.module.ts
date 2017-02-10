import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from '../one/one.component';
import { AdminComponent } from '../admin/admin.component';
import { DetailsComponent } from '../details/details.component';
import { HistoryComponent } from '../history/history.component';
import { TodosComponent } from '../todos/todos.component';
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
  },  
  {
    path:'history',
    component: HistoryComponent
  },  
  {
    path:'todos',
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

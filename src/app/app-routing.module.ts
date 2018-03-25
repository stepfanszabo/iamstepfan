import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
//import { NotFound }  from './notfound.component';
import { MainComponent }  from './main/main.component';
import { BlogComponent }  from './blog/blog.component';
import { AdminComponent }  from './admin/admin.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '/index',  component: MainComponent },
  { path: '/blog',  component: BlogComponent },
  { path: '/Eh6XEQ9uMxH',  component: AdminComponent },
  //{path: '**', component: NotFound }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
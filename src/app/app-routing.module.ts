import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
//import { NotFound }  from './notfound.component';
import { MainComponent }  from './main/main.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: MainComponent },
  //{path: '**', component: NotFound }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
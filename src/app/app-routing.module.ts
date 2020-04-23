import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorFormComponent } from './visitor-form/visitor-form.component';
import { VisitorDetailsComponent } from './visitor-details/visitor-details.component';


const routes: Routes = [
  { path: '', component: VisitorFormComponent },
  { path: 'visitorDetails', component: VisitorDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

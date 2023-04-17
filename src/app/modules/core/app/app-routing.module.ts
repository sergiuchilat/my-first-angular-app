import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../../features/todo/components/list/list.component';
import { MainComponent } from '../../features/contact/main/main.component';

const routes: Routes = [
  {
    path: '', component: ListComponent
  },
  {
    path: 'contact', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

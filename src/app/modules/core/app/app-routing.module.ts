import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../../features/todo/pages/list/list.component';
import { MainComponent } from '../../features/contact/pages/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'contact',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

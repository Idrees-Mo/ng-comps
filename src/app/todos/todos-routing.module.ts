import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosHomeComponent } from './todos-home/todos-home.component';

const routes: Routes = [{ path: '', component: TodosHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosHomeComponent } from './todos-home/todos-home.component';
import { TodosItemComponent } from './todos-item/todos-item.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { SharedModule } from '../shared/shared.module';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  declarations: [TodosHomeComponent, TodosItemComponent, TodoDetailComponent],
  imports: [CommonModule, TodosRoutingModule, SharedModule],
})
export class TodosModule {}

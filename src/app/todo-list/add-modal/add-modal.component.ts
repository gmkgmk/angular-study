import { TodoListService } from './../../service/todo-list/todo-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {
  isVisible = false;
  value: string;

  constructor(private todoListService: TodoListService) {}
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log(this.value);
    console.log('Button ok clicked!');
    this.todoListService.addTodoList(this.value).subscribe(() => {
      console.log(1);
    });
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

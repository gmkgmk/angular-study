import { TodoListService } from './../../service/todo-list/todo-list.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {
  isVisible = false;
  value: string;
  @Output() fetchData = new EventEmitter<boolean>();

  constructor(
    private todoListService: TodoListService,
    private message: NzMessageService
  ) {}
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    if (!this.value) {
      this.message.error('请填写内容');
      return;
    }

    this.todoListService.addTodoList(this.value).subscribe(() => {
      this.fetchData.emit();
      this.value = '';
      this.message.success('添加成功!');
    });
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

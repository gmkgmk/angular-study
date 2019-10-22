import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { TodoListService } from 'src/app/service/todo-list/todo-list.service';
import { delay } from 'rxjs/operators';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { Subscription } from 'rxjs/internal/Subscription';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild(AddModalComponent, { static: false })
  private addModal: AddModalComponent;
  private listOfData: Array<any> = [];
  private loading = false;

  // 状态枚举
  private statusMap = {
    0: '未开始',
    1: '正在进行',
    2: '结束'
  };

  constructor(private todoListService: TodoListService) {
  }
  fetchData() {
    this.loading = true;
    this.todoListService
      .fetchTodoList()
      .pipe(delay(800))
      .subscribe(({ result }) => {
        this.listOfData = result.data;
        this.loading = false;
      });
  }
  remove(id: number | string) {
    this.todoListService.removeTodoList(id).subscribe(() => {
      this.fetchData();
    });
  }
  ngOnInit() {
    this.fetchData();
  }
}

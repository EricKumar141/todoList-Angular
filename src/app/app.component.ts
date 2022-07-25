import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: any[] = [];
  addTask(item: string) {
    this.todoList.push({ id: this.todoList.length, name: item });
    console.log(this.todoList);
  }
  deleteTask(id: number) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}

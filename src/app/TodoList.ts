import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './TodoList.html',
  styleUrls: ['./TodoList.css'],
})
export class AppComponent {
  todoList: any[] = [];

  addTask(item: string) {
    if (item) {
      this.todoList.push({
        id: this.todoList.length,
        title: item,
        completed: false,
      });
      console.log(this.todoList);
    }
  }
  toggleTask(id: number) {
    this.todoList[id].completed = !this.todoList[id].completed;
    console.log(this.todoList);
  }
  deleteTask(id: number) {
    this.todoList = this.todoList.filter((item) => item.id !== id);
  }
}

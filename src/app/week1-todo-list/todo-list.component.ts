import { Component } from '@angular/core';
import { TodoListModel } from './todo-list-model';

@Component({
  selector: 'todo-list',
   templateUrl: './todo-list.component.html',
   styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    constructor() { }

    public items: TodoListModel[];

    public mode: 'List' | 'Add' | 'Edit' = 'List';

    public editItem: TodoListModel;

    public allTasksCount: number = 0;

    public inProgressTasksCount: number = 0;

    public completedTasksCount: number = 0;

    ngOnInit() {
        this.items = [{
            id: "1",
            title: "試著透過 Tocas UI 拉出版面",
            deadline: new Date(),
            files: [""],
            comment: "123",
            star: false,
            complete: false
        },{
            id: "2",
            title: "測試看看被 star 的樣子，如果超過高度會發生什麼事情呢?",
            deadline: null,
            files: [],
            comment: "",
            star: true,
            complete: false
        },{
            id: "3",
            title: "完成了，然後呢?",
            deadline: null,
            files: [],
            comment: "",
            star: false,
            complete: true
        }]
        this.updateTasksCount();
    }

    ngAfterViewInit() {

    }

    public updateTasksCount() {
        this.allTasksCount = this.items.length;
        this.completedTasksCount = this.items.filter(task => task.complete).length;
        this.inProgressTasksCount = this.allTasksCount - this.completedTasksCount;
    }

    public addTask() {
        this.mode = "Add";
        this.editItem = new TodoListModel();
    }

    public editTask(id: string) {
        this.mode = "Edit";
    }

    public exitModifyMode(action: "Save" | "Cancel") {
        if (action == "Save") {
            // TODO: Call update task list
        }
        this.mode = "List";
    }

}

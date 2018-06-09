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

    public filterItems: TodoListModel[];

    public mode: 'List' | 'Add' | 'Edit' = 'List';

    public currentTab: 'All' | 'InProgress' | 'Completed' = 'All';

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
        this.filterItems = this.items;
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

    public changeTaskStarStatus(id: string) {
        let item = this.items.find(x => x.id === id);
        item.star = !item.star;
    }

    public changeTaskCompletedStatus(id: string) {
        let item = this.items.find(x => x.id === id);
        item.complete = !item.complete;
        this.updateTasksCount();
    }

    public filterTask(status: 'All' | 'InProgress' | 'Completed') {
        
        this.currentTab = status;

        // filter tasks
        if (status === "All") {
            this.filterItems = this.items.slice();
        } else if (status === "InProgress") {
            this.filterItems = this.items.filter(x => !x.complete);
        } else {
            this.filterItems = this.items.filter(x => x.complete);
        }
    }

}

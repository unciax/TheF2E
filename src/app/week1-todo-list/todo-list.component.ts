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
            star: true,
            complete: true
        }]
    }

    ngAfterViewInit() {

    }



}

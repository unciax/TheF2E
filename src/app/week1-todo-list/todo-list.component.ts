import { Component, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { TodoListModel } from './todo-list-model';
import * as moment from 'moment';
import 'moment/locale/zh-tw';


@Component({
  selector: 'todo-list',
   templateUrl: './todo-list.component.html',
   styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

    constructor(@Inject(FormBuilder)private fb: FormBuilder) { }

    public items: TodoListModel[] = [];

    public filterItems: TodoListModel[] = [];

    public mode: 'List' | 'Add' | 'Edit' = 'List';

    public currentTab: 'All' | 'InProgress' | 'Completed' = 'All';

    public editItem: TodoListModel;

    public allTasksCount: number = 0;

    public inProgressTasksCount: number = 0;

    public completedTasksCount: number = 0;

    public taskForm: FormGroup;

    private dp: DatePipe;

    ngOnInit() {
        this.dp = new DatePipe(navigator.language);
        this.taskForm = this.fb.group({
            taskName: ['', Validators.required],
            taskStar: false,
            taskDeadlineDate: new Date(),
            taskDeadlineTime: new Date(),
            taskFile: '',
            taskComment: ''
        });
        this.items = [{
            id: "1",
            title: "試著透過 Tocas UI 拉出版面",
            deadline: new Date(),
            file: "tocas.css",
            comment: "123",
            star: false,
            complete: false
        },{
            id: "2",
            title: "測試看看被 star 的樣子，如果超過高度會發生什麼事情呢?",
            deadline: null,
            file: null,
            comment: "",
            star: true,
            complete: false
        },{
            id: "3",
            title: "完成了，然後呢?",
            deadline: null,
            file: null,
            comment: "",
            star: false,
            complete: true
        }]
        this.filterItems = this.items;
        this.updateTasksCount();
    }

    public updateTasksCount() {
        this.allTasksCount = this.items.length;
        this.completedTasksCount = this.items.filter(task => task.complete).length;
        this.inProgressTasksCount = this.allTasksCount - this.completedTasksCount;
    }

    public addTask() {
        this.mode = "Add";
        this.editItem = new TodoListModel();
        this.bindValueToFormControl();
        this.taskForm.reset();
    }

    public editTask(id: string) {
        this.mode = "Edit";
        this.editItem = this.items.find(x => x.id === id);
        this.bindValueToFormControl();
    }

    public removeTask(id: string) {
        let index = this.items.findIndex(x => x.id === id);
        if (index != -1) {
            this.items.splice(index, 1);
        }
        this.filterTask(this.currentTab);
        this.updateTasksCount();
    }

    private bindValueToFormControl() {
        let model = this.editItem;
        let controls = this.taskForm.controls;
        controls.taskName.setValue(model.title);
        controls.taskStar.setValue(model.star);
        controls.taskFile.setValue(model.file);
        controls.taskComment.setValue(model.comment);
        if (model.deadline) {
            let dtr = this.dp.transform(model.deadline, 'y-MM-dd');
            controls.taskDeadlineDate.setValue(dtr);
            let ttr = this.dp.transform(model.deadline, 'HH:mm');
            controls.taskDeadlineTime.setValue(ttr);
        }
        
    }

    private bindValueToModel() {
        let model = this.editItem;
        let controls = this.taskForm.controls;
        model.title = controls.taskName.value;
        model.star = controls.taskStar.value;
        model.file = controls.taskFile.value;
        model.comment = controls.taskComment.value;
        let newDeadline = null;
        if (controls.taskDeadlineDate.value != "" && controls.taskDeadlineDate.value != null) {
            newDeadline = moment(controls.taskDeadlineDate.value);
        }

        if (controls.taskDeadlineTime.value != "" && controls.taskDeadlineTime.value != null) {
            let timePart = moment(controls.taskDeadlineTime.value, "HH:mm");
            if (newDeadline === null) {
                newDeadline = moment();
            }
            newDeadline.hour(timePart.hour());
            newDeadline.minute(timePart.minute());
        } else if (newDeadline != null) {
            newDeadline.hour(0);
            newDeadline.minute(0);
        }
        model.deadline = newDeadline ? newDeadline.toDate() : null;
    }

    public exitModifyMode(action: "Save" | "Cancel") {
        if (action == "Save") {
            // TODO: Call update task list
            if (!this.taskForm.valid) {
                this.taskForm.controls.taskName.markAsTouched();
                return;
            }
            this.bindValueToModel();
            let index = this.items.findIndex(x => x.id === this.editItem.id);
            if (index != -1) {
                this.items.splice(index, 1);
            }
            this.items = this.items.concat(this.editItem);
            this.filterTask(this.currentTab);
            this.updateTasksCount();
            
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
        this.filterTask(this.currentTab);
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

    public getFileName($event: any) {
        let file = $event.target.files[0];
        this.taskForm.controls.taskFile.setValue(file.name);
    }

    public removeFile() {
        this.taskForm.controls.taskFile.setValue("");
    }

}

import { v4 as uuid } from 'uuid';

export class TodoListModel {
    id: string = uuid();
    title: string;
    deadline: Date;
    file: string;
    comment: string;
    star: boolean;
    complete: boolean;
}
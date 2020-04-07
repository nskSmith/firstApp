export enum Status {
    ToDo = 'TODO',
    Done = 'Done',
    InProgress = 'InProgress'
}

export class Task {
    constructor (
        public date: Date,
        public text: string,
        public status: Status
    ) { }
}
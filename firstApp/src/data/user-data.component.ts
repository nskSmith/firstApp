import { Component } from '@angular/core'

@Component({
    selector: 'user-data',
    templateUrl: './user-data.component.html',
    styleUrls: ['./user-data.component.css']
})

export class UserDataComponent {
    constructor() {}
}

export class User {
    constructor ( public id = 0, public name = '', public email = '', public contact = '') {}
}
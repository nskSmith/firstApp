import { Component } from '@angular/core';
import { UserData } from 'src/data/user-data.service';
import { DataService } from 'src/data/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/data/user-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'CRUD';
  users: UserData[]=[];

  constructor(private dataservice: DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users=data;
    });
}

  ngOnInit(){
    this.getUsers();
  }

}

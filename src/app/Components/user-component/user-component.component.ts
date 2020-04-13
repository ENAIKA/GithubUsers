import { Component, OnInit } from '@angular/core';
import{UserRequestService} from '../../services/user-request.service';
import{User} from '../../classes/user';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
user:User;

userForm:FormGroup;

submitUser(){

  console.log(this.user.githubUserName);
  this.user= new User("","","","","");//empty the field after submit
  }

  constructor(private userrequest:UserRequestService) { }
  
  ngOnInit(){
    this.userrequest.userRequest()
    this.user=this.userrequest.user
    console.log(this.user)
    
   
  }

}

import { Component, OnInit } from '@angular/core';
import{UserRequestService} from '../../services/user-request.service';
import{User} from '../../classes/user';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Repos} from '../../classes/repos';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit {
user:User;
repo:Repos;
userForm:FormGroup;
gitName:string;

  constructor(public userrequest:UserRequestService, private route:Router) {
    this.user= new User("","",0,0,0,"", new Date())
    this.repo= new Repos("","","")
   }

  submitUser(){
    this.userrequest.getUrl(this.gitName);
    this.userrequest.userRequest()
    this.user=this.userrequest.user
    
    this.userrequest.getUserRepos()
    this.repo=this.userrequest.repo 
    
     }
    
  
  ngOnInit(){
    //this for my default profile
    this.userrequest.userRequest()
    this.user=this.userrequest.user
    this.userrequest.getUserRepos()
    this.repo=this.userrequest.repo 
  }

}

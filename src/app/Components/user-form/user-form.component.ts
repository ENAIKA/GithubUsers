import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import{ Repos} from '../../classes/repos';
import {RepoRequestService} from '../../services/repo-request.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  repos:Repos;
reponame:string;
repoForm:FormGroup;
    constructor(public userRequestRepo:RepoRequestService) {this.repos= new Repos("","","") }

    submitRepo(){
      this.userRequestRepo.getRepoName(this.reponame);
      this.userRequestRepo.getUsersRepos()
      this.repos=this.userRequestRepo.repos
      
      
    }
     
  ngOnInit(){
    this.userRequestRepo.getUsersRepos()
    this.repos=this.userRequestRepo.repos

  }

}

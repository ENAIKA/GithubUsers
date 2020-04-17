import { Injectable } from '@angular/core';
import { Repos } from '../classes/repos';
import {HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
repos:Repos;
repo:any;
key=environment.key;
reponame:string;
  constructor(private http:HttpClient) {
    this.reponame="gify"//default results
    this.repos= new Repos("","","")
   }

  getUsersRepos() {  
    interface api{
      items:any      
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<api>("https://api.github.com/search/repositories?access_token=" + this.key + "&q="+this.reponame
      ).toPromise().then(response => {

        this.repos=response.items
        console.log(this.repos,"gtsf service")
        resolve()
      },
        error => {
          this.repos.repoName = "Error"
          this.repos.repoDescription="Error"
          this.repos.repoUrl="Error"
          

          reject(error)
        })
    })
    return promise

  }


  getRepoName(reponame: string) {
    this.reponame = reponame

  }
}

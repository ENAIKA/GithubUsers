import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Repos } from '../classes/repos';




@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  user: User;
  repo: Repos;
  repos:Repos[];
  key = environment.key
  gitName: string;
  reponame: string;
  githubRepoSearchUrl = "https://api.github.com/search/repositories?access_token=" + this.key + "&q="


  constructor(private http: HttpClient) {
    this.gitName = "enaika"
    this.user = new User("", "", 0, 0, 0, "", new Date());
  
    this.repos=[]
  }

  userRequest() {
    interface ApiResponse {
      login: string, avatar_url: string, public_repos: number, following: number, followers: number, html_url: string, created_at:Date
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + this.gitName + "?access_token=" + this.key).toPromise().then(response => {
        this.user.githubUserName = response.login
        this.user.userPicture = response.avatar_url
        this.user.userRepos = response.public_repos
        this.user.userFollowing = response.following
        this.user.userFollowers = response.followers
        this.user.githubUrl = response.html_url
        this.user.date=response.created_at
        resolve()
      },
        error => {
          this.user.githubUserName = "Error"
          this.user.userPicture = "could not find picture"
          this.user.userRepos = 0
          this.user.userFollowing = 0
          this.user.userFollowers = 0
          this.user.githubUrl = "An err occurred"
          this.user.date=new Date()

          reject(error)
        })
    })
    return promise

  }

  getUserRepos() {  
    let promise = new Promise((resolve, reject) => {
      this.http.get<Repos>("https://api.github.com/users/" + this.gitName + "/repos?access_token=" + this.key
      ).toPromise().then(response => {

        this.repo=response
        resolve()
      },
        error => {
          this.repo.repoName = "Error"
          this.repo.repoDescription = "An error occurred while fetching the repo"
          this.repo.repoUrl = "Error"

          reject(error)
        })
    })
    return promise

  }
  getUrl(gitName: string) {
    this.gitName = gitName
  }

  getRepoName(reponame: string) {
    this.reponame = reponame

  }

}

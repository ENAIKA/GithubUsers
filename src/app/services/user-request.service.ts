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
  key = environment.key
  url = "https://api.github.com/users/enaika?access_token=" + this.key


  constructor(private http: HttpClient) {
    this.user = new User("", "", "", "", "");
  }

  userRequest() {
    interface ApiResponse {
      login: string, email: string, public_repos: string, company: string, location: string
    }

    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(this.url).toPromise().then(response => {
        this.user.githubUserName = response.login
        this.user.userEmail = response.email
        this.user.userRepos = response.public_repos
        this.user.userCompany = response.company
        this.user.userLocation = response.location
        console.log(response)

        resolve()
      },
        error => {
          this.user.githubUserName = "Error"
          this.user.userEmail = "Error"
          this.user.userRepos = "Error"
          this.user.userCompany = "Error"
          this.user.userLocation = "Error"

          reject(error)
        })
    })
    return promise

  }

}

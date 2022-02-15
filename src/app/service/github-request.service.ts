import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Repo } from '../classes/repo';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  user!: User;
  repository!: Repo;
  repoData: any
  userData: any


  constructor(private http: HttpClient) {
    this.userData = new User("", 0, "", "", new Date)
    this.repoData = new Repo("", "", "", "", new Date)
   }

   getGithubInfo(userName: string) {

    this.repoData.length = 0;

    interface ApiResponse {
      login: string,
      public_repos: number,
      avatar_url: string,
      html_url: string
    }
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + userName + environment.apiKey).toPromise().then(response => {
        this.user.login = User.login;
        this.user.public_repos = User.public_repos;
        this.user.avatar_url = User.avatar_url;
        this.user.html_url = User.html_url;
  
        resolve();
      },
        error => {
          this.user.login = "lewis-murgor"
          this.user.avatar_url = "https://avatars.githubusercontent.com/u/95276296?v=4"
          this.user.public_repos = 15
          this.user.html_url = "https://github.com/lewis-murgor"
          reject(error);
        }) 
      this.http.get<any>("https://api.github.com/users/" + userName + "/repos" + environment.apiKey).toPromise().then(response => {
          for (let i = 0; i < response.length; i++) {
            this.userData = new Repo(response[i].name, response[i].description, response[i].language, response[i].html_url, response[i].updated);
            this.repoData.push(this.userData);
          }
          resolve();
        },
          error => {
            reject();
          })
      })
      return promise;
   }

}

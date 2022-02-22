import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Repo } from '../classes/repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  repository!: Repo;
  user!: User;
  repoData: any;
  searchRepository: any;

  constructor(private http:HttpClient) {
    this.user = new User("", "", "", 0, "", 0, 0, new Date())
    this.repository = new Repo("", "", "", new Date())
   }

   getGithubUser(name: string) {
     interface ApiResponse {
       name: string;
       login: string;
       avatar_url: string;
       public_repos: number;
       html_url: string;
       followers: number;
       following: number;
       created_at: Date;
     }

     let promise = new Promise<void>((resolve, reject)=> {
       this.http.get<ApiResponse>("https://api.github.com/users/" + name + '?accessToken=' + environment.apiKey).toPromise().then(response=> {
         this.user.name = response!.name;
         this.user.login = response!.login;
         this.user.avatar_url = response!.avatar_url;
         this.user.public_repos = response!.public_repos;
         this.user.html_url = response!.html_url;
         this.user.followers = response!.followers;
         this.user.following = response!.following;
         this.user.created_at = response!.created_at;

         resolve();
       }, error => {
         reject(error);
       });
     });

     return promise;
   }

   getMyGithub(myGithub: string) {
     interface ApiResponse {
       name: string;
       html_url: string;
       description: string;
       created_at: Date;
     }

     let promiseMe = new Promise((resolve, reject)=> {
       this.http.get<ApiResponse>("https://api.github.com/users/" + myGithub + '/repos?order=created&sort=asc?access_token=' + environment.apiKey).toPromise().then(getResponse => {
         this.repoData = getResponse;

         resolve(promiseMe);
       }, error => {
         reject(error);
       });
     });

     return promiseMe;
   }

   getGithubRepositories(name: string) {
     interface ApiResponse {
       properties: any;
     }

     let promise = new Promise((resolve, reject) => {
       this.http.get<ApiResponse>("https://api.github.com/search/repositories?q=" + name + ' &per_page=10 ' + environment.apiKey).toPromise().then(getResponse => {
         this.searchRepository = getResponse?.properties;

         resolve(promise);
       }, error => {
         reject(error);
       });
     });

     return promise;
   }
}



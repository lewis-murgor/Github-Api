import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  users = new BehaviorSubject<any>([])

  getGithubUsers() {
    return this.http.get('https://api.github.com/users/?q=${githubUserName}&access_token=${environment.apiKey}').subscribe((response: any)=>{
      this.users.next(response.data)
    });
  }

  getRepositories() {
    return this.http.get('https://api.github.com/users/repos?access_token=${environment.apiKey}').subscribe((response: any)=>{
      this.users.next(response.data)
    });
  }

  getGithubInformation() {
    return this.users.asObservable();
  }

  constructor(private http: HttpClient) { }

}

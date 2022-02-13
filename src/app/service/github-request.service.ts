import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {

  

  getGithubUsers(search:string):Observable<any> {
    return this.http.get('https://api.github.com/users/${search}?=${environment.apiKey}')
  }

  getRepositories(search:string):Observable<any> {
    return this.http.get('https://api.github.com/users/${search}/repositories?=${environment.apiKey}')
  }

  

  constructor(private http: HttpClient) { }

}

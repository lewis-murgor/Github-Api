import { Component } from '@angular/core';
import { User } from './classes/user';
import { GithubRequestService } from './service/github-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName!: string;
  githubUser: any;
  githubRepositories: any;

  constructor(private githubService: GithubRequestService) {}

  findGithub(user: User) {
    this.userName = user.userName
    console.log(this.userName)

    this.githubService.getGithubUsers(this.userName).subscribe(data => {
      this.githubUser = data
      console.log(data)
    })
    
    this.githubService.getRepositories(this.userName).subscribe(data => {
      this.githubRepositories = data
      console.log(data)
    })
    
  }
}

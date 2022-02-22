import { Component, OnInit, } from '@angular/core';
import { Repo } from '../classes/repo';
import { GithubRequestService } from '../service/github-request.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public myGithub = "lewis-murgor";
  public getGithubUser!: string;

  user!: User;
  public searchGithub!: string;
  repository!: Repo

  displayNewUser(userName: string) {
    this.myGithub = userName;
    this.getGithubUser = "";
    this.ngOnInit();
  }

  constructor(private githubService: GithubRequestService, public requestService: GithubRequestService) { }

  ngOnInit(): void {
    this.githubService.getGithubUser(this.myGithub);
    this.user = this.githubService.user;
    this.requestService.getGithubRepositories(this.myGithub);
  }

}

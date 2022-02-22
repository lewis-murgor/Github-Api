import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../service/github-request.service';
import { Repo } from '../classes/repo';
import { User } from '../classes/user';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  myGithub = 'lewis-murgor'
  getGithubUser!: string;

  repositories!: Repo;
  user!: User;
  searchGithub!: string;

  displayNewUser(userName: string) {
    this.getGithubUser = "";
    this.myGithub = userName;
    this.ngOnInit();
  }

  constructor(private githubService: GithubRequestService, public requestService: GithubRequestService) { }

  ngOnInit(): void {
    this.githubService.getGithubUser(this.myGithub)
    this.user = this.githubService.user;
    this.requestService.getGithubRepositories(this.myGithub)
  }

}
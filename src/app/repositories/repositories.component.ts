import { Component, OnInit } from '@angular/core';
import { GithubRequestService } from '../service/github-request.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  user!: User;
  repoDetails: any = [];
  githubService!: GithubRequestService;

  constructor(githubService: GithubRequestService) {
    this.githubService = githubService;
   }

  ngOnInit(): void {
    this.user = this.githubService.user
    this.repoDetails = this.githubService.repoData
  }

}

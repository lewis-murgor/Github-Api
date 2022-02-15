import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';
import { GithubRequestService } from '../service/github-request.service';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() displayUser = new EventEmitter<User>();

  user!: User;
  userName!: string
  githubService!: GithubRequestService;

  newUser = new User("", 0, "", "", new Date)

  searchUserName(){
    this.displayUser.emit(this.newUser)
    this.githubService.getGithubInfo(this.userName)
  }

  constructor(githubService: GithubRequestService) {
    this.githubService = githubService;
   }

  ngOnInit(): void {
    this.githubService.getGithubInfo(this.userName)
    this.user = this.githubService.user;
  }

}

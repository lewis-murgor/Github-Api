import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { GithubRequestService } from '../service/github-request.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: any

  subscription:Subscription = new Subscription
  users:any = [];
  githubService: any;

  constructor(githubService: GithubRequestService) { }

  ngOnInit(): void {
    this.githubService.getGithubUsers()

    this.subscription = this.githubService.getGithubInformation().subscribe((response:any)=>{
      this.users = response
    })
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
   }

    
  }



import { Component } from '@angular/core';
import { User } from './classes/user';
import { GithubRequestService } from './service/github-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: any
}

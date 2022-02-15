import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  @Input() user!: User;
  
  displayNewUser(user: User) {
    this.user.created_at = new Date(user.created_at)
  }
  constructor() { }

  ngOnInit(): void {
  }

    
    
  }



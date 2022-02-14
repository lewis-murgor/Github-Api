import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() inputtedUser = new EventEmitter<User>();

  searchUserName() {
    this.inputtedUser.emit(this.user)
  }

  user = new User("")

  constructor() { }

  ngOnInit(): void {
  }

}

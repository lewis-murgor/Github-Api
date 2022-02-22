import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userName!: string;

  @Output() displayUser = new EventEmitter<string>();

  searchUserName(userName: string) {
    this.displayUser.emit(userName)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

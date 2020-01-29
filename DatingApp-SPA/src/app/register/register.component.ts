import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.model);
  }

  cancelled(){
    this.cancelRegister.emit(false);
    console.log('Cancelled');

  }
}

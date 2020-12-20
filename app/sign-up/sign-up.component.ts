import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {


  personalInfoComplete = true;
  addressComplete = false;
  positionComplete = false;
  completedRegistration = false;

  stepOne = false;
  stepTwo = false;
  stepThree = false;
  user = false;
  userInformation = [];
  userInfoArray: UserInfo;

  name;

  constructor() { }

 

  personalInfoSubmit() {
    this.personalInfoComplete = false;
    this.addressComplete = true;
    this.stepOne = true;
    this.user = true;



    // this.customerInformation.push(this.userInfoArray.name);
    // this.customerInformation.push({
    //   name: this.userInfoArray.name,
    //   email: this.userInfoArray.email
    // });

    console.log('Your Info ' + this.name.userInfoArray);
  }

  addressSubmit() {
    this.addressComplete = false;
    this.positionComplete = true;
    this.stepTwo = true;
  }

  positionSubmit() {
    this.positionComplete = false;
    this.completedRegistration = true;
    this.stepThree = true;
  }

}

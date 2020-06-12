import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  validationError: string;
  success:string;

submit(f){
  // To be calling Serive 
  let userName = f.form.value.userName;
  let passWord = f.form.value.password;

if(userName != "0001" && passWord != "passw0rd!")  {
  this.validationError = "User Name or Password is incorrect";
  this.success="";
}
else{
this.validationError ="";
this.success="Login Successful!!!";
}
}
// To be redirecting to customer search page
}

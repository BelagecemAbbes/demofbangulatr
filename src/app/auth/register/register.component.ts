import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/shared/classes/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form: RegisterForm  = {
    email:'',
    password:'',
    confirm_password:'',
   };

   passwordMatched: boolean = true;




   constructor(private authService: AuthService){}
   ngOnInit(): void {

   }
   submit(){
    console.log(this.form);

   this.authService.register(this.form);

  }

  isLoading(){
    return this.authService.isLoading;
  }



}

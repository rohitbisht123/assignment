  
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(3)]),
    
  })
  data: any;

  constructor(private service:UserserviceService,private route:Router) { }

  ngOnInit(): void {
  }
  logdata(){
     this.service.ReadUser(this.login.value).subscribe(result=>{
      this.data=result;
      
      let Email =this.login.get('email').value;
      localStorage.setItem('useremail',Email);
      if(result){
        console.log(this.data);
        
        this.route.navigate(['/dashboard']);
      }
    })
  }

}

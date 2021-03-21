import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Student } from 'src/model/student';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(5)]),
    password:new FormControl("",[Validators.required,Validators.minLength(3)]),
    address:new FormControl("",[Validators.required,Validators.minLength(5)]),
    email:new FormControl("",[Validators.required,Validators.email]),
  })
  data: any;

  constructor( private service:UserserviceService,private route:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  userdata(){
    this.service.insert(this.signup.value).subscribe(result=>{
      this.data=result;
      this.toaster.success("register succesfully","message")
      if(result){
        this.route.navigate(['/login'])
      }
    })
  }

}

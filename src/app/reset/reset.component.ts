import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  reset=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new  FormControl("",[Validators.required,Validators.minLength(4)])
  })
  data: import("c:/angularPractice/nodeassignment/src/model/student").Student[];

  constructor(private service:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    
  }
  resetpassword(){
    this.service.reset(this.reset.value).subscribe(result=>{
      this.data=result;
      if(result){
        this.route.navigate(['/login'])
      }
    })
  }
}

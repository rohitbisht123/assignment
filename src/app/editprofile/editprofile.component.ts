import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  editprofile=new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(5)]),
  
    address:new FormControl("",[Validators.required,Validators.minLength(5)]),
  
  })
  data: any;
  userdata:any;

  constructor(private service:UserserviceService,private route:Router) { }

  ngOnInit(): void {
    this.service.edit(localStorage.getItem('useremail')).subscribe(result=>{
      this.data=result;
      console.log(this.data);
      
      this.editprofile.patchValue({
        username:this.data.username,
        address:this.data.address

      })
    })
  }
  update(){
    this.service.updateprofile(localStorage.getItem('useremail'), this.editprofile.value).subscribe(result=>{
      this.userdata=result;
      if(result){
        this.route.navigate(['/login'])

      }
    })
  }
  
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/model/student';




@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  url="http://localhost:4000"  
  insert(item):Observable<Student[]>{
    return this.http.post<Student[]>(this.url+'/signup/',item)
  }
  ReadUser(data):Observable<Student[]>{
    return this.http.post<Student[]>(this.url+'/login/',data)
  }

  reset(data):Observable<Student[]>{
    return this.http.post<Student[]>(this.url+'/reset/',data)
  }
  edit(data):Observable<Student[]>{
    return this.http.get<Student[]>(this.url+'/edit/'+data)
  }
  updateprofile(email,data):Observable<Student[]>{
    return this.http.put<Student[]>(this.url+'/update/'+email,data)
  }

}

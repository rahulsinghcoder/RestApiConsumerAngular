import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {

  //private proxy = "https://api.allorigins.win/raw?url=";
  private url="http://localhost:8082/api/";

  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    console.log('Request is sent!');
    return this.http.get(this.url +'students');
  }
  getStudentByID(studId:number):Observable<any>{
    return this.http.get(this.url +'student/'+ studId);
  }
}

import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';
@Injectable({
providedIn: 'root'
})
export class EmployeeService{
    ROOT_URL:String="http://sprinbootawsrds-env.eba-m7cvmnzv.us-east-2.elasticbeanstalk.com";
    // private apiServeUrl=this.ROOT_URL;
    constructor(private http: HttpClient){
        // private apiServeUrl=environment.apiBaseUrl;
    }
    public getEmployees():Observable<Employee[]>{
        return this.http.get<Employee[]>(`${this.ROOT_URL}/employee/all`);
    }
    public addEmployee(employee:Employee):Observable<Employee>{
        return this.http.post<Employee>(`${this.ROOT_URL}/employee/add`,employee);

    }
    public updateEmployee(employee:Employee):Observable<Employee>{
        return this.http.put<Employee>(`${this.ROOT_URL}/employee/update`,employee);
        
    }
    public deleteEmployee(employeeId:number):Observable<void>{
        return this.http.delete<void>(`${this.ROOT_URL}/employee/delete/${employeeId}`);
        
    }
}

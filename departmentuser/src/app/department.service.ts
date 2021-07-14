import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  ROOT_URL:String="http://localhost:9001/departments";
    constructor(private http: HttpClient){
        // private apiServeUrl=environment.apiBaseUrl;
    }
  
    public addDepartment(department:Department):Observable<Department>{
      return this.http.post<Department>(`${this.ROOT_URL}/`,department);
    }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from './department';
import { DepartmentService } from './department.service';
import { User } from './user';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }

  [x: string]: any;

  public department: Department[] = [];
  public user: User[] = [];
  
  constructor(private departmentservice: DepartmentService, private userservice: UserService){}
 
  goToPage(pageName:string){
    this.router.navigate(['${pageName}'])
  }

  public onAddDepartment(addForm: NgForm): void {
   document.getElementById('add-employee-form')?.click();
  this.departmentservice.addDepartment(addForm.value).subscribe((response: Department)=>{console.log(response);this.getEmployees();addForm.reset();},(error: HttpErrorResponse)=>{alert(error.message)});
  addForm.reset();
  }
  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-user-form')?.click();
   this.userservice.addUser(addForm.value).subscribe((response: User)=>{console.log(response);this.getEmployees();addForm.reset();},(error: HttpErrorResponse)=>{alert(error.message)});
   addForm.reset();
   }

  public onOpenModal(department:Department,mode: string):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='addDep'){
  button.setAttribute('data-target','#addDepartmentModal');
    }
    if(mode==='addUser'){
      button.setAttribute('data-target','#addUserModal');
        }
    // if(mode==='edit'){
    //   this.editEmployee=employee;
    //   button.setAttribute('data-target','#updateEmployeeModal');
    // }
    // if(mode==='delete'){
    //   this.deleteEmployee=employee;
    //   button.setAttribute('data-target','#deleteEmployeeModal');
    // }
     container?.append(button);
     button.click(); 
  }


}

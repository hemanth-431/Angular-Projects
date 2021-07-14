import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myportfolio';


public onOpenModal(mode:string): void{
   document.getElementById('close-form')?.click();
  const container=document.getElementById('main-container');
  const button=document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if(mode==='delete'){
    button.setAttribute('data-target','#deleteEmployeeModal');
  }
container?.appendChild(button);
button.click();
}
}
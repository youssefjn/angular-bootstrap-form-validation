import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators  } from "@angular/forms";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
 
})

export class HomeComponent implements OnInit {
  title='Angular Form Validation Tutorial';
  angForm:any = FormGroup; 
  
  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.angForm=this.fb.group({
      name: ['',Validators.required],
      address: ['',Validators.required]
    });
  }
  ngOnInit(): void {
  }

}

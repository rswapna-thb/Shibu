import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import { Router} from '@angular/router';
import { EmployeeModel } from '../employee-model';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms'
 
@Component({
  selector: 'app-employee-entry-screen',
  templateUrl: './employee-entry-screen.component.html',
  styleUrls: ['./employee-entry-screen.component.css']
})
export class EmployeeEntryScreenComponent implements OnInit {
  employeemodel:EmployeeModel=new EmployeeModel();
  registerForm: FormGroup;
  submitted = false;

  textBoxDisabled=true;
  toggle(){
    this.textBoxDisabled = !this.textBoxDisabled;
  }
  
  constructor(private router:Router, private formBuilder: FormBuilder, private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName:  ['', Validators.required],
      date: ['', Validators.required],
      year: ['', Validators.required],
      percentage: ['',Validators.required],
      permanent_address: ['',Validators.required],
      present_address: ['',Validators.required],
      email: ['',Validators.required],
      mobile_num: ['',Validators.required],
      FatherName: ['',Validators.required],
      pan: ['',Validators.required],
      adhaar: ['',Validators.required]
    });
  }
  addEmployee(f:NgForm)
  {
    this.employeeservice.addEmployee(this.employeemodel)
    .subscribe(
    data =>{
        alert(data);
    }   
    );
  }
   // get f() { return this.registerForm.controls };
    //  this.employeeform = this.formBuilder.group({
      //"firstName":new FormControl(['', Validators.required]),
      //"lastName": ['', Validators.required],
     
  //);
  /*onSubmit(){

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}*/
  
}
  
//onLoadDataClick():void{
  //this.employeeform.patchValue({
   // firstName:"",
   // lastName:""
 // })

//}



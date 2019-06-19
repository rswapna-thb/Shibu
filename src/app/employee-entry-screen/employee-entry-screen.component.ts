import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee-entry-screen',
  templateUrl: './employee-entry-screen.component.html',
  styleUrls: ['./employee-entry-screen.component.css']
})
export class EmployeeEntryScreenComponent implements OnInit {

  //employeeform: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //  this.employeeform = this.formBuilder.group({
      //"firstName":new FormControl(['', Validators.required]),
      //"lastName": ['', Validators.required],
  }//);
}
//onLoadDataClick():void{
  //this.employeeform.patchValue({
   // firstName:"",
   // lastName:""
 // })

//}
//onSubmit(){
  //console.log(this.employeeform);
//}


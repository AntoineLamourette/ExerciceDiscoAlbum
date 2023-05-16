import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{

  

  formCreate!:FormGroup;

  constructor (private builder: FormBuilder){}
  ngOnInit(): void {

    this.formCreate = this.builder.group({

      id:[null,[Validators.required]],
      title:[null,[Validators.required]],
      album_id:[null,[Validators.required]]
    
  });

  


  }
}

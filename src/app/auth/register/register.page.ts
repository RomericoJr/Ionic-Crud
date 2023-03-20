import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formRegister : FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(6)]],
    email : ['',[Validators.required, Validators.email]],
    password : ['',[Validators.required, Validators.minLength(6)]],
    rol_id: 2
  });


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  register(){
    this.auth.register(this.formRegister.value).subscribe((data:any)=>{
      console.log('data  a register',data);
      if(data){
        console.warn('Registro exitoso');

        console.log('se registro');
        this.router.navigateByUrl('/inicio/login');
      }
    });
    // console.log('formRegister',this.formRegister.value);


  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/interface/auth';
import { AuthService } from 'src/app/service/auth.service';
import { SweetService } from 'src/app/service/sweet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin : FormGroup = this.fb.group({
    email : ['',[Validators.required, Validators.email]],
    password : ['',[Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private sweet: SweetService
  ) { }

  ngOnInit() {
  }

  save(){
    // console.log('formLogin',this.formLogin.value);
    this.auth.login(this.formLogin.value).subscribe((data:any)=>{

      console.log('data',data);

      if(data.access_token){
        localStorage.setItem('token',data.access_token);
        localStorage.setItem('rol',data.user.rol);
        localStorage.setItem('user',JSON.stringify(data))
        // this.router.navigateByUrl('/home');
        console.log('existe si llego aqui');
        this.sweet.success('Bienvenido');
        this.router.navigateByUrl('/tabs/tab1');
        this.formLogin.reset();
      }


    });

  }

}

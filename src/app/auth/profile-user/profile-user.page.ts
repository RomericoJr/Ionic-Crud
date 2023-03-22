import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.page.html',
  styleUrls: ['./profile-user.page.scss'],
})
export class ProfileUserPage implements OnInit {

  user_Profile = [];
  constructor(
    private authService: AuthService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.authService.data_profile().subscribe((data:any)=>{
      this.user_Profile = data;
      console.log('data',this.user_Profile);
    });
  }

  logout(){
    this.authService.logout().subscribe((data:any)=>{
      console.log('data',data);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('rol');
      console.log('sesion cerrada correctamente');
      this.route.navigate(['/']);

    },(error)=>{});
  }

}

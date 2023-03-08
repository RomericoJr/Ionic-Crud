import { categoria } from './../../interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-categoria',
  templateUrl: './add-edit-categoria.page.html',
  styleUrls: ['./add-edit-categoria.page.scss'],
})
export class AddEditCategoriaPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private productService: CrudService,
    private toastCtrl: ToastController,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  formCategoria : FormGroup = this.fb.group({
    Type_categoria : ['',[Validators.required]],

  })

  save(){
    let newCategoria :categoria =this.formCategoria.value;
    console.log('newCategoria',newCategoria);

    this.productService.createCategoria(newCategoria).subscribe(newC => {
      console.log('newC',newC);

      if(newCategoria){
        this.presentToast('Categoria registrado', 'success');
        this.router.navigate(['/tabs/tab3']);
      }

    })

  }
  async presentToast(msn: string, icon : string) {
    const toast = await this.toastCtrl.create({
      message: msn,
      duration: 2000,
      position: 'bottom',
      icon: icon,
    });
    toast.present();
  }

  ngOnInit() {
  }

}

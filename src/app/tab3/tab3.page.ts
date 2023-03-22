import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { categoria } from '../interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  arrayCategoria: categoria[] = [] ;

  constructor(
    private productService: CrudService,
    private alertCtrl: AlertController,
    private toastCtrl : ToastController,
    private router: Router
  ) {}

  ngOnInit(){
    this.getAllCategoria();
  }

  getAllCategoria() {
    this.productService.getCategoria().subscribe((dato :any) =>{
      // console.log('crud',dato);
      this.arrayCategoria = dato;
      console.log('crud',this.arrayCategoria);

    })
  }

  deleteCategory( categoria :categoria){
    console.log('llega');
    this.confirmacion(categoria);
  }

  async confirmacion(categoria: categoria){
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Estas seguro de eliminar esta categoria?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Eliminar',
          // cssClass: 'secondary',
          handler: () => {
            // console.log('Confirm Cancel: blah');
            this.productService.deleteCategoria(categoria.id).
            subscribe((res) => {
              console.log('resultado de la petición',res);

              if(res == null){
                this.presentToast('Producto eliminado correctamente','trash');
                this.getAllCategoria();
              }
            });
            console.log('estas eliminando');

          }
        },{
          text: 'Cancelar',
          handler: () => {
            console.log('Estas cancelando');
          }
        }

      ]
    });
    await alert.present();
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

  agregar(){
    this.router.navigate(['/tabs/addCategoria']);
  }

}

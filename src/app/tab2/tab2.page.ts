import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { product } from '../interface';
import { SweetService } from '../service/sweet.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  listProducts: product[] = [];



  constructor(
    private productService: CrudService,
    private alertCtrl: AlertController,
    private toastCtrl : ToastController,
    private router: Router,
    private sweet:SweetService
  ) {
    // this.getAllProducts();
  }

  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((products: any ) => {
      this.listProducts = products;
      console.log('crud',this.listProducts);
    });
  }

  deleteProduct(product: product){
    this.confirmacion(product)
  }

  editProduct(product: product){
    this.router.navigate(['tabs/edit',product.id])
  }
  async confirmacion(product: product){
    const alert = await this.alertCtrl.create({
      header: 'Confirmación',
      message: '¿Estas seguro de eliminar este producto?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Eliminar',
          // cssClass: 'secondary',
          handler: () => {
            // console.log('Confirm Cancel: blah');
            this.productService.deleteProduct(product.id).
            subscribe((res) => {
              console.log('resultado de la petición',res);

              if(res == null){
                this.presentToast('Producto eliminado correctamente','trash');
                this.getAllProducts();
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
    this.router.navigateByUrl('/tabs/add');
  }
}

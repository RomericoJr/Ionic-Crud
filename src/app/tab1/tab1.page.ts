import { Component } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { LoadingController } from '@ionic/angular';
import { product } from '../interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  cardsProduct: product[] = [];

  constructor(
    private productService: CrudService,
    private loadingCtrl : LoadingController

    ) {
      this.getAllProducts();
    }

    getAllProducts(){
      console.log('si sirvo');
      this.presentLoading();
      this.productService.getproductsMore().subscribe((products: any)=>{
        this.cardsProduct.push(...products);
        console.log(this.cardsProduct);
        if(products){
          this.loadingCtrl.dismiss();
        }
      })


    }

    async presentLoading() {
      const loading = await this.loadingCtrl.create({
        message: 'Cargando productos...',
        translucent : true,
        spinner: 'bubbles'
      });
      await loading.present();


    }
}

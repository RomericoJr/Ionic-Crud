import { Component, OnInit, Input } from '@angular/core';
import { FavoritosService } from '../../service/favoritos.service';
import { CarritoService } from '../../service/carrito.service';
import { EmmiterService } from 'src/app/service/emmiter.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() card: any = [];
  favoritos: any[] = [];

  icono!: boolean ;
  statusIcon: string = 'heart-outline';

  constructor(
    private favService : FavoritosService,
    private carrService : CarritoService,
    private emitS : EmmiterService
  ) { }

  ngOnInit() {
    this.iconStatus();
  }

  iconStatus(){
    let idStatus: any;
    idStatus = JSON.parse(localStorage.getItem('favoritos') || '[]') || [];
    // console.log('pruebita',idStatus);
    if(idStatus.find((fav :any) => fav.id === this.card.id)){
      this.icono = true;
      this.statusIcon = 'heart';
      // console.log('icono',this.icono);

    } else {
      this.icono = false;
      this.statusIcon = 'heart-outline';
      // console.log('icono',this.icono);
    }
  }


  addFavorito(){
    this.favService.addFavorito(this.card);
    this.iconStatus();
  }

  addCarrito(){
    this.carrService.addCarrito(this.card);
  }
  // addFavorito(){
  //   //crea un arreglo vacio
  //   let favoritos: any[] = [];
  // const favoritosString = localStorage.getItem('favoritos');

  //   //si el localstorage tiene datos
  //   if(favoritosString !== null){
  //     //guarda los datos del localstorage en la variable favoritos
  //     favoritos = JSON.parse(favoritosString);
  //   }
  //   //agrega los datos del producto al arreglo favoritos
  //   favoritos.push(this.card);
  //   //guarda los datos en el localstorage
  //   localStorage.setItem('favoritos', JSON.stringify(favoritos));
  // }




  // addCarrito(product: any){
  //   //crea un arreglo vacio
  //   let carrito: any[] = [];
  // const carritoString = localStorage.getItem('carrito');

  //   //si el localstorage tiene datos
  //   if(carritoString !== null){
  //     //guarda los datos del localstorage en la variable favoritos
  //     carrito = JSON.parse(carritoString);
  //   }
  //   //agrega los datos del producto al arreglo favoritos
  //   carrito.push(this.card);
  //   //guarda los datos en el localstorage
  //   localStorage.setItem('carrito', JSON.stringify(carrito));

  // }


  // addFavorito(){
  //   console.log(this.card);
  //   localStorage.setItem('favorito', JSON.stringify(this.card));
  // }

}

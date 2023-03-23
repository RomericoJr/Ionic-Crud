import { Component, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/service/favoritos.service';
import { EmmiterService } from '../../service/emmiter.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage implements OnInit {

  arrayFavorites: any[] = [];
  deleteFavorite:[] =[];

  constructor(
    private  favService : FavoritosService,
    private emmiterS : EmmiterService
  ) { }

  ngOnInit() {
    this.emmiterS.getNewProduct.subscribe((product) => {
      console.log('escuche ', product);
      this.arrayFavorites.push(product);

    })
    this.getFavorites();
  }

  getFavorites(){
    const favoritesString = localStorage.getItem('favoritos');
    if(favoritesString !== null){
      this.arrayFavorites = JSON.parse(favoritesString);
      console.log('mis favoritos',this.arrayFavorites);
    }
  }

  deleteFavoritoById(id: number){
    this.favService.deleteFavoritoById(id);
  }

}

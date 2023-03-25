import { Injectable } from '@angular/core';
import { EmmiterService } from './emmiter.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  misFavoritos: any[] = [];
  existe: any;

  deleteFavorite:[] =[];
  arrayFavorites: any[] = [];

  constructor(
    private emitS : EmmiterService
  ) { }

  addFavorito(pro:any){
    this.misFavoritos = JSON.parse(localStorage.getItem('favoritos')  || '[]') || [];
    if(this.misFavoritos){
      this.existe=this.misFavoritos.find((fav) => fav.id === pro.id);
    }
    if(this.existe){
      this.misFavoritos = this.misFavoritos.filter((fav) => fav.id !== pro.id);
    } else {
      this.misFavoritos = [pro,...this.misFavoritos];
    }
    localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
    this.emitS.setNewFavorite(this.misFavoritos);

  }


  agregarFavorito(favorito: any) {
    this.misFavoritos = JSON.parse(localStorage.getItem('favoritos')  || '[]') || [];
    this.existe = this.misFavoritos.find((fav) => fav.id === favorito.id);
    if (!this.existe) {
      this.misFavoritos.push(favorito);
      localStorage.setItem('favoritos', JSON.stringify(this.misFavoritos));
    }
  };

  deleteFavoritoById(id: number){
    const deleteFav = localStorage.getItem('favoritos');
    if(deleteFav !== null){
      this.deleteFavorite = JSON.parse(deleteFav);
      console.log('delete',this.deleteFavorite);
      let deleteFavoriId = this.arrayFavorites.findIndex((favorito) => favorito.id === id);
      this.deleteFavorite.splice(deleteFavoriId, 1);
      let favoritoDelete = JSON.stringify(this.deleteFavorite);
      localStorage.setItem('favoritos', favoritoDelete);
    }
  }
}

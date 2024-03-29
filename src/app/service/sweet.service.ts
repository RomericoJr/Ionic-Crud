import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class SweetService {

  constructor( ) { }

  error(msn:string) {
    Swal.fire({
      title: msn,
      icon: 'error',
      showConfirmButton: false,
      timer: 1500
    })
  }

  success(msn:string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msn,
      showConfirmButton: false,
      timer: 1500
    })
  }

  confirm(msn:string){
    return Swal.fire({
      title: msn,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar!'
    })
    // .then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Post eliminado',
    //       'success'
    //     )
    //   }
    // })

  }

}

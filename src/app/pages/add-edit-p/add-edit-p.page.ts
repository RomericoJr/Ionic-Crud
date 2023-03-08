import { IDp, product } from './../../interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-edit-p',
  templateUrl: './add-edit-p.page.html',
  styleUrls: ['./add-edit-p.page.scss'],
})
export class AddEditPPage implements OnInit {

  titleText = 'Agregar producto';
  titleBtn = 'Agregar';

  marca! : any;
  categoria! : any;

  getDatos: any;
  idProduct! : any;
  formProducto: FormGroup =this.fb.group({
    name: ['',[Validators.required]],
    categoria_id:[,[Validators.required]],
    marca_id:[,[Validators.required]],
    descripcion:['',[Validators.required]],
    precio:[,[Validators.required]],
    stock:[,[Validators.required]],
    UrlImage:['',[Validators.required]],
    estado:[1,[Validators.required]]

  });

  // public formProducto:FormGroup = new FormGroup({}) ;

  constructor(
    private fb: FormBuilder,
    private productService: CrudService,
    private toastCtrl: ToastController,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
    this.productService.getMarca().subscribe((datos: any) =>{
      console.log('Estos son las marcas',datos);
      this.marca = datos;
    });
    this.productService.getCategoria().subscribe((datos: any) =>{
      console.log('Estos son las categorias',datos);
      this.categoria = datos;
    });

    // this.formProducto =this.fb.group({
    //   name: ['',[Validators.required]],
    //   categoria:['',[Validators.required]],
    //   marca:['',[Validators.required]],
    //   descripcion:['',[Validators.required]],
    //   precio:[,[Validators.required]],
    //   stock:[,[Validators.required]],
    //   UrlImage:['',[Validators.required]],
    //   estado:[,[Validators.required]]

    // });

    this.activatedRoute.params.subscribe((IDp:any) =>{
      // console.log('Esto es IDp',IDp);

      this.idProduct = parseInt(IDp.id);
      console.log('Esto es idProduct y sera guardado',this.idProduct);

      if(IDp.id){
        this.titleText = 'Editar producto';
        this.titleBtn = 'Actualizar';
        this.productService.getProductById(this.idProduct).
        subscribe((datos: any) =>{
          console.log('Producto obtenido', datos[0]);
          this.getDatos = datos[0];

          // this.formProducto =this.fb.group({
          //   name: [datos[0].name,[Validators.required]],
          //   categoria:['',[Validators.required]],
          //   marca:['',[Validators.required]],
          //   descripcion:['',[Validators.required]],
          //   precio:[,[Validators.required]],
          //   stock:[,[Validators.required]],
          //   UrlImage:['',[Validators.required]],
          //   estado:[,[Validators.required]]

          // });

          // this.formProducto.reset(this.getDatos)

          this.formProducto.patchValue({
            name : datos[0].name,
            categoria_id : datos[0].categoria_id,
            marca_id : datos[0].marca_id,
            descripcion : datos[0].descripcion,
            precio : datos[0].precio,
            stock : datos[0].stock,
            UrlImage : datos[0].UrlImage,
            estado : datos[0].estado
          });


        })
      }
    })
  }

  save(){
    if(this.idProduct){
      this.updateProduct();
    } else{
    this.newProduct();
    }
  }

  updateProduct(){
    let updateProduct : product = this.formProducto.value;
    updateProduct.id = this.idProduct;

    console.log('Producto a actualizar', updateProduct);
  this.productService.updateProduct(updateProduct).
  subscribe((update : any) => {
    console.log(update);
    if(update){
      this.presentToast('Producto actualizado', 'success');
      this.router.navigate(['tabs/tab2']);
    }

    });
  }

  newProduct(){
    let newProduct: product = this.formProducto.value;
    console.log('esto guardare',newProduct);

    this.productService.createProduct(newProduct).
    subscribe((newP) =>{
      console.log('Este producto se guardara',newP);
      if(newP){
        this.presentToast('Producto registrado', 'success');
        this.router.navigate(['tabs/tab2']);
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





}

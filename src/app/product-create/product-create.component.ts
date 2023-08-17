import { ProductService } from './../service/product.service';
import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { IProduct } from '../interface/IProduct';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  productForm = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(255)]
    ],
    price: [
      0,
      [Validators.required, Validators.min(0)]
    ],
    desc: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(255)]
    ]
  })
  constructor(
    private formBuilder: UntypedFormBuilder,
    private ProductService: ProductService,
    private router: Router
  ){}

  onHandleSubmit(){
    const product: IProduct ={
      id: '',
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      desc: this.productForm.value.desc || '',
    }
    this.ProductService.createProduct(product).subscribe(
      product => {
        alert(`Them san pham thanh cong: ${product.name}`)
        this.router.navigate(['/']);
      },
      error =>{
        alert(`them san pham that bai: ${error.message}`);
      }
    )
  }
}


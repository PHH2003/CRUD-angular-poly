import { IProduct } from './../interface/IProduct';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
product!: IProduct;
productForm! : FormGroup;
constructor(
    private formBuilder: FormBuilder,
    private ProductService: ProductService,
    private route: ActivatedRoute,
    private router: Router

  ){}
  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
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
    this.route.paramMap.subscribe(parmas =>{
      const id = parmas.get('id');
      if(id) {
        this.ProductService.getProductbyId(id).subscribe(
         (data: IProduct) => {
          this.product =data;
          this.productForm.patchValue({
            name: this.product.name,
            price: this.product.price,
            desc: this.product.desc
          })
          },
          error => {
            console.log(error.mesage);
            
          }
        )
      }
    })
  }
  onHandleSubmit(): void{
    if(this.productForm.valid && this.product){
      const updatedProduct: IProduct ={
        ...this.product,
        name: this.productForm.value.name,
        price: this.productForm.value.price,
        desc: this.productForm.value.desc
      }
      this.ProductService.updateProduct(updatedProduct).subscribe(
        product => {
          alert(`Product cap nhat thanh cong: ${product.name}`)
          this.router.navigate(['/']);
        },
        error => {
          alert(`Product cap nhat khong thanh cong: ${error.message}`)
        }
      )
    }
  }
}


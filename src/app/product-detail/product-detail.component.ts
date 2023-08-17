import { ActivatedRoute } from '@angular/router';
import { IProduct } from './../interface/IProduct';
import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private router: Router
  ) {
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('id'));
      this.ProductService.getProductbyId(id).subscribe(
        product => {
          this.product = product;
        }, 
        error => {console.log(error.message);
        }
        
      )
    })
  }
  goToHome() {
    this.router.navigate(['/']); // Chuyển hướng về trang chủ
  }
  
}

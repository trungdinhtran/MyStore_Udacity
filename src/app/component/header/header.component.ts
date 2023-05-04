import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pageTitle: string = 'My Store';
  cartProductList!: Product[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartProduct();
  }
}

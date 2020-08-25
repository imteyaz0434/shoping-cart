import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Items } from '../../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ProductItems:[Items];
  filterData: any;
  noData: boolean = false;
  httpError:boolean =false;
  sidemenu:boolean=false;

  constructor(private cartService: CartService, private router:Router) {}

  ngOnInit() {
    this.cartService.fetch().subscribe(
      (Cartitem) => {
        //console.log(Cartitem);
        this.ProductItems = Cartitem;
        this.appendData();
        //console.log(this.ProductItems);
      },
      (error) => {
        this.httpError = true;
        console.log(error.message);
      }
    );
  }

  appendData() {
    this.filterData = this.ProductItems;
    this.checkSearch();
  }
  showProduct(id){
    //console.log(id);
    this.router.navigate(['/cart',id]);
  }

  addToCart(item) {
    this.cartService.updatecart(item);
  }

  checkSearch() {
    this.cartService.search$.subscribe((val) => {
      //console.log(val);
      if (val == null) {
        this.filterData = this.ProductItems;
      } else {
        this.filterData = this.ProductItems.filter((x) =>
          x.name.trim().toLowerCase().includes(val.trim().toLowerCase())
        );
      }
      this.noData = this.filterData == '' ? true : false;
    });
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
cartCount:any;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.checkCart();
  
  }

  checkCart(){
  this.cartService.count$.subscribe(count =>{
     this.cartCount=count;
    // console.log(this.cartCount);
  });
  
  }
  search(term: string) {
    if(term.length>=0){
      this.cartService.showSearch(term);
    }
  }

}

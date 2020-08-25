import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { CartService } from 'src/app/services/cart.service';
import { Items } from '../../models/model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
selectedItem;
  constructor(private cartService: CartService,private activelink:ActivatedRoute) { }
  item=[];
  ngOnInit(){
  const id = this.activelink.snapshot.paramMap.get('id');
    this.fetch(id);
}
  fetch(id){
  this.selectedItem = this.cartService.fetchById(id);
  }

}
  

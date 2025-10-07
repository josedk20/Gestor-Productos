import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../Interfaces/iproduct';
import { StockStatusPipe } from "../../pipes/stock-status-pipe";
import { CommonModule } from '@angular/common';
import { DiscountPipe } from "../../pipes/discount-pipe";

@Component({
  selector: 'app-product-card',
  imports: [StockStatusPipe, CommonModule, DiscountPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

@Input() product: Iproduct = {
  id: 0,
  nombre: '',
  precio: 0,
  descripcion: '',
  category: '',
  instock: false,
  createAT: new Date('')  
}

@Input() showDiscount: boolean = false;
@Input() discountPercent: number = 0;

@Output()deleteProduct = new EventEmitter<number>();
@Output() viewDetails = new EventEmitter<number>();

onDelete(){ //Construir los metodos
  if(confirm(`¿Estás seguro de eliminar el producto ${this.product.nombre}?`)){
    this.deleteProduct.emit(this.product.id);
  }
}
    onViewDetails(){
      this.viewDetails.emit(this.product.id);
    }

}

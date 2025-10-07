import { Injectable } from '@angular/core';
import { Iproduct } from '../Interfaces/iproduct';


@Injectable({
  providedIn: 'root'
})
export class ProductoServicio {

  private products: Iproduct[] = [
    {
      id: 1,
      nombre: 'Laptop',
      precio: 1200,
      descripcion: 'A high-performance laptop.',
      category: 'Electronics',
      instock: true,
      createAT: new Date('2023-01-15')  
    },
    {    
      id: 2,
      nombre: 'Smartphone',
      precio: 800, 
      descripcion: 'A latest model smartphone.', 
      category: 'Electronics', 
      instock: true, 
      createAT: new Date('2023-02-20'),
      },
    {
      id: 3,
      nombre: 'Headphones',
      precio: 150, 
      descripcion: 'Noise-cancelling headphones.', 
      category: 'Accessories', 
      instock: false, 
      createAT: new Date('2023-03-10')  
    },
    {
      id: 4,
      nombre: 'SmartWatch',
      precio: 250,
      descripcion: 'Feature-rich smartwatch.',
      category: 'Wearables',
      instock: true,
      createAT: new Date('2023-04-01')
    },
    {
      id: 5,
      nombre: 'Tablet',
      precio: 400,
      descripcion: 'Lightweight and powerful tablet.',
      category: 'Electronics',
      instock: true,
      createAT: new Date('2023-05-05')
    },
  ];

getProducts(): Iproduct[] {
  return this.products;  
}

getProductsByIdCategory(category: string): Iproduct[] { 
  if (category === 'all') {
    return this.getProducts();  
    }
    return this.products.filter(product => product.category === category);
}

addProduct(product: Omit<Iproduct, 'id'>): void {
  const newProducts: Iproduct= {
      ...product,
    id:this.generateID(),
    createAT: new Date()
  };
  this.products.push(newProducts);
}

deleteProduct(id: number): void {
  this.products = this.products.filter(product => product.id !== id);
}
getProductById(id: number): Iproduct | undefined {
  return this.products.find(product => product.id === id);
}

getCategories(): string[] {
  const categories = this.products.map(product => product.category);
  return ['all', ...new Set(categories)];
}

private generateID(): number {
  return this.products.length > 0 
    ? Math.max(...this.products.map(product => product.id)) + 1 
    : 1;
  }

getInStockCount(): number {
  return this.products.filter(product => product.instock).length; 
  }
getTotalInventoryValue(): number {
  return this.products.filter(product => product.instock).reduce((total, product) => total + product.precio, 0);
  }
}
  

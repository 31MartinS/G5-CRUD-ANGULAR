import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  lastProductId: number = 0;

  product: Product = { id: this.lastProductId, name: '', price: 0 };
  
  constructor(private productService: ProductService, private router: Router) {}

  addProduct(): void {
    // Generar un nuevo ID de manera automática en el cliente
    this.product.id = this.generateNewProductId();

    this.productService.addProduct(this.product).subscribe(() => {
      // Redirigir después de agregar el producto
      this.router.navigate(['/']);
    });
  }

  private generateNewProductId(): number {
    // Lógica para generar un nuevo ID. Puedes usar una variable auxiliar o cualquier otra lógica que prefieras.
    // En este ejemplo, simplemente se incrementa en 1 más que el último ID conocido.
    const lastKnownId = this.productService.getLastKnownProductId(); // Implementa esta función en ProductService
    return lastKnownId + 1;
  }
}

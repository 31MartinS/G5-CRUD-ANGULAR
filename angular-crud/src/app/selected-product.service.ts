import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {
  private selectedProductIdSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  selectedProductId$: Observable<number> = this.selectedProductIdSubject.asObservable();

  setSelectedProductId(id: number) {
    this.selectedProductIdSubject.next(id);
  }
}

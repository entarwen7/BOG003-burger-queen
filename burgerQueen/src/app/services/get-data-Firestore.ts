import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class getDataFirestore {
  sendOrders$ = new EventEmitter();

  constructor() {}
}

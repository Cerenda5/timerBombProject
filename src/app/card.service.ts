import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  produits: Array<Card> = new Array<Card>(
    new Card('Defuse', 5),
    new Card('Securised', 19),
    new Card('Big Ben', 1));

  constructor() { }
}

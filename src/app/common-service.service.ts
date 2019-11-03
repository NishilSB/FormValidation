import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  arrRegisteredUser: Array<any> = [];
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

   PATH = "http://api.infosat.ma:8080//association/api/";

  constructor() { }
}

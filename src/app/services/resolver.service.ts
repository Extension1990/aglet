import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  data: any;

  constructor(private service: ServiceService) { }

  resolve(route: ActivatedRouteSnapshot) {
    this.data = route.paramMap.get('data');
    return this.service.getData(this.data);
  }
}
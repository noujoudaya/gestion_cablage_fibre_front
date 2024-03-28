import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {OrderKoscDto} from 'src/app/controller/model/order/OrderKosc.model';
import {OrderKoscCriteria} from 'src/app/controller/criteria/order/OrderKoscCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class OrderKoscAdminService extends AbstractService<OrderKoscDto, OrderKoscCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/orderKosc/');
    }

    public constrcutDto(): OrderKoscDto {
        return new OrderKoscDto();
    }

    public constrcutCriteria(): OrderKoscCriteria {
        return new OrderKoscCriteria();
    }
}

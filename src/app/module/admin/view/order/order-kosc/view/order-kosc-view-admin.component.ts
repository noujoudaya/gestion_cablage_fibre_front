import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {OrderKoscAdminService} from 'src/app/controller/service/admin/order/OrderKoscAdmin.service';
import {OrderKoscDto} from 'src/app/controller/model/order/OrderKosc.model';
import {OrderKoscCriteria} from 'src/app/controller/criteria/order/OrderKoscCriteria.model';

import {ReasonKoDto} from 'src/app/controller/model/commun/ReasonKo.model';
import {ReasonKoAdminService} from 'src/app/controller/service/admin/commun/ReasonKoAdmin.service';
@Component({
  selector: 'app-order-kosc-view-admin',
  templateUrl: './order-kosc-view-admin.component.html'
})
export class OrderKoscViewAdminComponent extends AbstractViewController<OrderKoscDto, OrderKoscCriteria, OrderKoscAdminService> implements OnInit {


    constructor(private orderKoscService: OrderKoscAdminService, private reasonKoService: ReasonKoAdminService){
        super(orderKoscService);
    }

    ngOnInit(): void {
    }


    get reasonKo(): ReasonKoDto {
       return this.reasonKoService.item;
    }
    set reasonKo(value: ReasonKoDto) {
        this.reasonKoService.item = value;
    }
    get reasonKos(): Array<ReasonKoDto> {
       return this.reasonKoService.items;
    }
    set reasonKos(value: Array<ReasonKoDto>) {
        this.reasonKoService.items = value;
    }


}

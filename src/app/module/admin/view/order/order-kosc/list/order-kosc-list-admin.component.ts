import {Component, OnInit} from '@angular/core';
import {OrderKoscAdminService} from 'src/app/controller/service/admin/order/OrderKoscAdmin.service';
import {OrderKoscDto} from 'src/app/controller/model/order/OrderKosc.model';
import {OrderKoscCriteria} from 'src/app/controller/criteria/order/OrderKoscCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ReasonKoDto} from 'src/app/controller/model/commun/ReasonKo.model';
import {ReasonKoAdminService} from 'src/app/controller/service/admin/commun/ReasonKoAdmin.service';


@Component({
  selector: 'app-order-kosc-list-admin',
  templateUrl: './order-kosc-list-admin.component.html'
})
export class OrderKoscListAdminComponent extends AbstractListController<OrderKoscDto, OrderKoscCriteria, OrderKoscAdminService>  implements OnInit {

    override fileName = 'OrderKosc';


    reasonKos: Array<ReasonKoDto>;


    constructor( private orderKoscService: OrderKoscAdminService  , private reasonKoService: ReasonKoAdminService) {
        super(orderKoscService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('OrderKosc').subscribe(() => {
            if (this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
                this.loadReasonKo();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'dateRdv', header: 'Date rdv'},
            {field: 'reasonKo?.libelle', header: 'Reason ko'},
        ];
    }


    public async loadReasonKo(){
       this.reasonKoService.findAllOptimized().subscribe(reasonKos => this.reasonKos = reasonKos, error => console.log(error))
    }



   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                'Date rdv': this.datePipe.transform(e.dateRdv , 'dd/MM/yyyy hh:mm'),
                'Reason ko': e.reasonKo?.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Date rdv Min': this.criteria.dateRdvFrom ? this.datePipe.transform(this.criteria.dateRdvFrom , this.dateFormat) : environment.emptyForExport ,
            'Date rdv Max': this.criteria.dateRdvTo ? this.datePipe.transform(this.criteria.dateRdvTo , this.dateFormat) : environment.emptyForExport ,
        //'Reason ko': this.criteria.reasonKo?.libelle ? this.criteria.reasonKo?.libelle : environment.emptyForExport ,
        }];
      }
}
